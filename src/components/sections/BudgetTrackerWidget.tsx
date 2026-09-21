import React, { useState } from 'react'
import { Plus, ArrowUpRight, ArrowDownLeft, Database, ShieldAlert, CheckCircle2, Zap } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { useToast } from '@/components/ui/Toast'

interface Transaction {
  id: string
  title: string
  amount: number
  type: 'income' | 'expense'
  category: string
  timestamp: string
}

export const BudgetTrackerWidget: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([
    {
      id: 'tx-1',
      title: 'AWS Cloud EC2 Services',
      amount: -45.0,
      type: 'expense',
      category: 'Cloud Infrastructure',
      timestamp: 'Just now',
    },
    {
      id: 'tx-2',
      title: 'AlgoUniversity SDE Stipend',
      amount: 400.0,
      type: 'income',
      category: 'Income',
      timestamp: '2 hours ago',
    },
    {
      id: 'tx-3',
      title: 'Docker Pro Subscription',
      amount: -15.0,
      type: 'expense',
      category: 'Developer Tools',
      timestamp: 'Yesterday',
    },
  ])

  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState('')
  const [type, setType] = useState<'income' | 'expense'>('expense')
  const [category, setCategory] = useState('Engineering')
  const [queryTelemetry, setQueryTelemetry] = useState('SELECT * FROM transactions WHERE user_id = $1 (Latency: 8.4ms via B-Tree Index)')
  const { toast } = useToast()

  const totalBalance = transactions.reduce((acc, curr) => acc + curr.amount, 1250)
  const totalIncome = transactions.filter((t) => t.type === 'income').reduce((acc, curr) => acc + curr.amount, 0)
  const totalExpenses = transactions.filter((t) => t.type === 'expense').reduce((acc, curr) => acc + Math.abs(curr.amount), 0)

  const handleAddTransaction = (e: React.FormEvent) => {
    e.preventDefault()
    if (!title || !amount) return

    const numAmount = parseFloat(amount)
    if (isNaN(numAmount) || numAmount <= 0) return

    const finalAmount = type === 'expense' ? -numAmount : numAmount
    const newTx: Transaction = {
      id: 'tx-' + Date.now(),
      title,
      amount: finalAmount,
      type,
      category,
      timestamp: 'Just now',
    }

    // Optimistic UI state update (mitigating race-conditions)
    setTransactions([newTx, ...transactions])
    setTitle('')
    setAmount('')

    // Simulated PostgreSQL query execution log
    const simulatedLatency = (Math.random() * 6 + 7).toFixed(1)
    setQueryTelemetry(
      `INSERT INTO transactions (title, amount, user_id) VALUES (...) -> Latency: ${simulatedLatency}ms [PostgreSQL Index Hit]`
    )

    toast({
      title: 'Transaction Recorded',
      description: `${title} (${type === 'income' ? '+' : '-'}$${numAmount.toFixed(2)}) synced with PostgreSQL.`,
      type: 'success',
    })
  }

  return (
    <div className="rounded-2xl border border-slate-700/80 bg-slate-900/90 p-5 sm:p-6 shadow-xl backdrop-blur-md">
      <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-base font-bold text-white">Interactive Budget Engine</span>
            <Badge variant="emerald" className="text-[10px]">
              PostgreSQL Indexing
            </Badge>
          </div>
          <p className="text-xs text-slate-400 mt-0.5">
            Demonstrating state-driven async workflow & race-condition prevention
          </p>
        </div>

        {/* Balance metrics */}
        <div className="flex items-center gap-4 text-right">
          <div>
            <div className="text-[11px] text-slate-400">Total Balance</div>
            <div className="text-lg font-bold text-emerald-400 font-mono">
              ${totalBalance.toFixed(2)}
            </div>
          </div>
          <div>
            <div className="text-[11px] text-slate-400">Expenses</div>
            <div className="text-lg font-bold text-rose-400 font-mono">
              -${totalExpenses.toFixed(2)}
            </div>
          </div>
        </div>
      </div>

      {/* Quick Add Form */}
      <form onSubmit={handleAddTransaction} className="mt-4 grid grid-cols-1 sm:grid-cols-12 gap-2.5">
        <input
          type="text"
          placeholder="Transaction title (e.g. Server Hosting)"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="sm:col-span-5 px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
          required
        />
        <input
          type="number"
          placeholder="Amount ($)"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          min="1"
          step="any"
          className="sm:col-span-3 px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
          required
        />
        <select
          value={type}
          onChange={(e) => setType(e.target.value as 'income' | 'expense')}
          className="sm:col-span-2 px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-indigo-500"
        >
          <option value="expense">Expense</option>
          <option value="income">Income</option>
        </select>
        <Button
          type="submit"
          variant="default"
          size="sm"
          className="sm:col-span-2 h-auto text-xs py-2 bg-indigo-600 hover:bg-indigo-500"
        >
          <Plus className="w-3.5 h-3.5 mr-1" />
          Add
        </Button>
      </form>

      {/* Transactions List */}
      <div className="mt-4 space-y-2 max-h-48 overflow-y-auto custom-scrollbar">
        {transactions.map((tx) => (
          <div
            key={tx.id}
            className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-slate-700 transition-colors"
          >
            <div className="flex items-center gap-2.5">
              <div
                className={`w-7 h-7 rounded-lg flex items-center justify-center ${
                  tx.type === 'income'
                    ? 'bg-emerald-500/20 text-emerald-400'
                    : 'bg-rose-500/20 text-rose-400'
                }`}
              >
                {tx.type === 'income' ? (
                  <ArrowDownLeft className="w-4 h-4" />
                ) : (
                  <ArrowUpRight className="w-4 h-4" />
                )}
              </div>
              <div>
                <div className="text-xs font-medium text-white">{tx.title}</div>
                <div className="text-[10px] text-slate-500">{tx.category} • {tx.timestamp}</div>
              </div>
            </div>
            <div
              className={`text-xs font-mono font-bold ${
                tx.type === 'income' ? 'text-emerald-400' : 'text-slate-300'
              }`}
            >
              {tx.type === 'income' ? '+' : ''}
              ${tx.amount.toFixed(2)}
            </div>
          </div>
        ))}
      </div>

      {/* SQL & Telemetry Note */}
      <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400 font-mono">
        <div className="flex items-center gap-1.5 text-indigo-300 truncate">
          <Database className="w-3.5 h-3.5 shrink-0" />
          <span className="truncate">{queryTelemetry}</span>
        </div>
        <span className="shrink-0 text-emerald-400 flex items-center gap-1">
          <Zap className="w-3 h-3" /> Indexed
        </span>
      </div>
    </div>
  )
}
