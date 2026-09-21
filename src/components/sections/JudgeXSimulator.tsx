import React, { useState } from 'react'
import {
  Play,
  Sparkles,
  RotateCcw,
  CheckCircle2,
  Cpu,
  HardDrive,
  ShieldCheck,
  Terminal,
  Layers,
  ArrowRight,
  Info,
} from 'lucide-react'
import confetti from 'canvas-confetti'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card'
import { CODE_PROBLEMS, CodeProblem } from '@/data/portfolioData'
import { useToast } from '@/components/ui/Toast'

export const JudgeXSimulator: React.FC = () => {
  const [selectedProblem, setSelectedProblem] = useState<CodeProblem>(CODE_PROBLEMS[0])
  const [code, setCode] = useState(CODE_PROBLEMS[0].initialCode)
  const [isRunning, setIsRunning] = useState(false)
  const [activeTab, setActiveTab] = useState<'console' | 'testcases' | 'architecture'>('console')
  const [executionResult, setExecutionResult] = useState<{
    status: 'idle' | 'running' | 'accepted' | 'compilation_error'
    logs: string[]
    time: string
    memory: string
  }>({
    status: 'idle',
    logs: ['System ready. Select a problem and click "Run in Sandbox" to trigger Docker isolated evaluation.'],
    time: '0.00s',
    memory: '0.0MB',
  })
  const [showAiHint, setShowAiHint] = useState(false)
  const { toast } = useToast()

  const handleProblemChange = (prob: CodeProblem) => {
    setSelectedProblem(prob)
    setCode(prob.initialCode)
    setShowAiHint(false)
    setExecutionResult({
      status: 'idle',
      logs: [`Switched to "${prob.title}". Ready for evaluation.`],
      time: '0.00s',
      memory: '0.0MB',
    })
  }

  const runCode = () => {
    setIsRunning(true)
    setShowAiHint(false)
    setActiveTab('console')
    setExecutionResult({
      status: 'running',
      logs: [
        'POST /api/v1/submissions (Dispatching to worker pool)...',
        'Provisioning ephemeral Docker container (image: gcc:12-slim)...',
        `Applying cgroups v2 limits: Memory = ${selectedProblem.executionLimits.memoryLimit}, CPU = 1.0 quota...`,
        'Enforcing network sandbox: isolated bridge namespace (--network none)...',
        'Compiling C++17 source code: g++ -O2 -std=c++17 solution.cpp -o runner...',
      ],
      time: '...',
      memory: '...',
    })

    setTimeout(() => {
      const logs = [
        'POST /api/v1/submissions -> 200 OK (Worker assigned: runner-ec2-03)',
        'Ephemeral container created: [c6f891b29a]',
        `Cgroups v2 limits configured: memory.max = ${selectedProblem.executionLimits.memoryLimit}, cpu.max = 100000`,
        'Network isolation: zero external sockets allowed',
        'g++ -O2 -std=c++17 solution.cpp compilation completed in 0.18s [0 Warnings]',
        'Evaluating against test cases:',
        ...selectedProblem.testCases.map(
          (tc, idx) => `  ✓ Testcase #${idx + 1}: Passed (Output matches expected: ${tc.expectedOutput})`
        ),
        'Zero runtime exceptions or timeouts detected.',
        'Final Verdict: ACCEPTED (Automated grading pipeline passed)',
      ]

      const randomTime = (Math.random() * 0.05 + 0.03).toFixed(3) + 's'
      const randomMem = (Math.random() * 3 + 12).toFixed(1) + 'MB'

      setExecutionResult({
        status: 'accepted',
        logs,
        time: randomTime,
        memory: randomMem,
      })
      setIsRunning(false)

      // Trigger celebratory confetti
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.7 },
      })

      toast({
        title: 'Execution Verdict: Accepted',
        description: `Passed all testcases in ${randomTime} with ${randomMem} peak memory.`,
        type: 'success',
      })
    }, 1800)
  }

  const triggerGeminiHint = () => {
    setShowAiHint(true)
    toast({
      title: 'Gemini AI Hint Generated',
      description: 'Retrieved contextual hint without revealing the complete solution.',
      type: 'info',
    })
  }

  const resetCode = () => {
    setCode(selectedProblem.initialCode)
    setShowAiHint(false)
  }

  return (
    <section id="simulator" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <Badge variant="cyan" className="text-xs px-3 py-1 font-semibold">
            Signature Project Simulator
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            JudgeX: <span className="gradient-cyan-indigo">Sandboxed C++ Code Runner</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Experience the automated execution pipeline Aditya engineered during his AlgoUniversity SDE externship. Runs C++ code in isolated Docker environments with resource bounds and Gemini AI hints.
          </p>
        </div>

        {/* Main Simulator Workspace */}
        <div className="rounded-3xl border border-slate-700/80 bg-[#080d1a] shadow-2xl overflow-hidden backdrop-blur-xl">
          {/* Top Control Header */}
          <div className="p-4 sm:p-5 border-b border-slate-800/80 bg-slate-900/60 flex flex-wrap items-center justify-between gap-4">
            {/* Problem Selector Buttons */}
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mr-1">
                Select Problem:
              </span>
              {CODE_PROBLEMS.map((prob) => (
                <button
                  key={prob.id}
                  type="button"
                  onClick={() => handleProblemChange(prob)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                    selectedProblem.id === prob.id
                      ? 'bg-indigo-600 text-white font-semibold shadow-md shadow-indigo-600/30'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  {prob.title}
                </button>
              ))}
            </div>

            {/* Constraints Badges */}
            <div className="flex items-center gap-3 text-xs text-slate-400 flex-wrap">
              <span className="inline-flex items-center gap-1">
                <Cpu className="w-3.5 h-3.5 text-indigo-400" />
                <span>Limit: {selectedProblem.executionLimits.timeLimit}</span>
              </span>
              <span className="inline-flex items-center gap-1">
                <HardDrive className="w-3.5 h-3.5 text-cyan-400" />
                <span>RAM: {selectedProblem.executionLimits.memoryLimit}</span>
              </span>
              <span className="inline-flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Docker Air-Gapped</span>
              </span>
            </div>
          </div>

          {/* Editor & Console Split Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[520px]">
            {/* Left: Code Editor (7 cols) */}
            <div className="lg:col-span-7 flex flex-col border-b lg:border-b-0 lg:border-r border-slate-800/80 bg-[#060a14]">
              {/* Editor Bar */}
              <div className="px-4 py-2.5 bg-slate-900/40 border-b border-slate-800/60 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-xs font-mono text-slate-400 ml-2">solution.cpp (C++17)</span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={resetCode}
                    className="flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                    title="Reset to starter code"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>Reset</span>
                  </button>
                </div>
              </div>

              {/* Code Textarea */}
              <div className="flex-1 relative font-mono text-xs sm:text-sm p-4 overflow-auto">
                <textarea
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  className="w-full h-full min-h-[360px] bg-transparent text-emerald-300 font-mono leading-relaxed resize-none focus:outline-none focus:ring-0 selection:bg-indigo-500/30"
                  spellCheck={false}
                />
              </div>

              {/* Gemini AI Hint Banner if triggered */}
              {showAiHint && (
                <div className="p-4 mx-4 mb-4 rounded-xl bg-indigo-950/40 border border-indigo-500/30 text-xs text-indigo-200 flex items-start gap-2.5 animate-in fade-in">
                  <Sparkles className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                  <p className="leading-relaxed">{selectedProblem.geminiHint}</p>
                </div>
              )}

              {/* Bottom Actions Bar */}
              <div className="p-4 bg-slate-900/60 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <Button
                    variant="glow"
                    size="md"
                    onClick={runCode}
                    disabled={isRunning}
                    className="font-semibold text-xs gap-2"
                  >
                    <Play className={`w-3.5 h-3.5 ${isRunning ? 'animate-spin' : 'fill-current'}`} />
                    <span>{isRunning ? 'Executing in Docker...' : 'Run in Sandbox'}</span>
                  </Button>

                  <Button
                    variant="outline"
                    size="md"
                    onClick={triggerGeminiHint}
                    className="text-xs gap-1.5 border-indigo-500/30 text-indigo-300 hover:bg-indigo-950/40"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Gemini AI Hint</span>
                  </Button>
                </div>

                <div className="text-[11px] text-slate-500 flex items-center gap-1">
                  <span>Isolated g++ -O2 container</span>
                </div>
              </div>
            </div>

            {/* Right: Telemetry & Results (5 cols) */}
            <div className="lg:col-span-5 flex flex-col bg-[#080d1a]">
              {/* Tab Navigation */}
              <div className="flex border-b border-slate-800/80 bg-slate-900/30">
                <button
                  type="button"
                  onClick={() => setActiveTab('console')}
                  className={`flex-1 py-3 text-xs font-semibold text-center transition-colors border-b-2 ${
                    activeTab === 'console'
                      ? 'border-indigo-500 text-white bg-indigo-950/20'
                      : 'border-transparent text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Execution Logs
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('testcases')}
                  className={`flex-1 py-3 text-xs font-semibold text-center transition-colors border-b-2 ${
                    activeTab === 'testcases'
                      ? 'border-indigo-500 text-white bg-indigo-950/20'
                      : 'border-transparent text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Test Cases ({selectedProblem.testCases.length})
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('architecture')}
                  className={`flex-1 py-3 text-xs font-semibold text-center transition-colors border-b-2 ${
                    activeTab === 'architecture'
                      ? 'border-indigo-500 text-white bg-indigo-950/20'
                      : 'border-transparent text-slate-400 hover:text-slate-200'
                  }`}
                >
                  System Architecture
                </button>
              </div>

              {/* Tab Content */}
              <div className="p-4 flex-1 overflow-y-auto font-mono text-xs flex flex-col">
                {activeTab === 'console' && (
                  <div className="flex-1 flex flex-col justify-between space-y-4">
                    {/* Status Badge */}
                    <div className="flex items-center justify-between pb-3 border-b border-slate-800/60">
                      <div className="flex items-center gap-2">
                        <span className="text-slate-400 text-xs">Verdict:</span>
                        {executionResult.status === 'accepted' ? (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            ACCEPTED
                          </span>
                        ) : executionResult.status === 'running' ? (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 animate-pulse">
                            SANDBOX EXECUTING...
                          </span>
                        ) : (
                          <span className="text-slate-500">IDLE</span>
                        )}
                      </div>

                      <div className="flex items-center gap-3 text-slate-400 text-[11px]">
                        <span>Time: <strong className="text-slate-200">{executionResult.time}</strong></span>
                        <span>Memory: <strong className="text-slate-200">{executionResult.memory}</strong></span>
                      </div>
                    </div>

                    {/* Console Output Log lines */}
                    <div className="bg-slate-950/80 p-3.5 rounded-xl border border-slate-800/80 text-slate-300 space-y-1.5 font-mono text-[11px] flex-1 overflow-y-auto max-h-80">
                      {executionResult.logs.map((log, i) => (
                        <div
                          key={i}
                          className={`leading-relaxed ${
                            log.includes('✓') || log.includes('ACCEPTED')
                              ? 'text-emerald-400 font-semibold'
                              : log.includes('POST') || log.includes('Docker')
                              ? 'text-indigo-300'
                              : 'text-slate-400'
                          }`}
                        >
                          {log}
                        </div>
                      ))}
                    </div>

                    {/* Quick highlight note */}
                    <div className="p-3 rounded-xl bg-slate-900/40 border border-slate-800 text-slate-400 text-[11px] leading-relaxed">
                      💡 <strong>Implementation Detail:</strong> In the real JudgeX platform, Aditya utilized Docker containers configured with Linux cgroups to throttle memory & CPU cycles, ensuring malicious submissions cannot compromise the host environment.
                    </div>
                  </div>
                )}

                {activeTab === 'testcases' && (
                  <div className="space-y-3">
                    <p className="text-xs text-slate-400">
                      Verified against hidden & public test cases with expected outputs:
                    </p>
                    {selectedProblem.testCases.map((tc, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1.5"
                      >
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-semibold text-slate-300">Testcase #{idx + 1}</span>
                          <span className="text-emerald-400 text-[11px] font-mono">Passed</span>
                        </div>
                        <div className="text-[11px] text-slate-400">
                          <span className="text-slate-500">Input: </span>
                          <span className="text-indigo-200 font-mono">{tc.input}</span>
                        </div>
                        <div className="text-[11px] text-slate-400">
                          <span className="text-slate-500">Expected: </span>
                          <span className="text-emerald-300 font-mono">{tc.expectedOutput}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'architecture' && (
                  <div className="space-y-3 text-slate-300">
                    <p className="text-xs text-slate-400">JudgeX Microservice Pipeline:</p>
                    <div className="space-y-2">
                      <div className="p-2.5 rounded-lg bg-slate-950 border border-indigo-500/20 text-xs">
                        <strong className="text-indigo-300">1. Client / React UI:</strong> Dispatches code payload & test cases via authenticated REST API.
                      </div>
                      <div className="p-2.5 rounded-lg bg-slate-950 border border-indigo-500/20 text-xs">
                        <strong className="text-indigo-300">2. Node.js / Express API:</strong> Authenticates JWT, checks rate-limits, pushes submission to evaluation queue.
                      </div>
                      <div className="p-2.5 rounded-lg bg-slate-950 border border-indigo-500/20 text-xs">
                        <strong className="text-indigo-300">3. Docker Sandbox:</strong> Spawns isolated container with air-gapped network & strict CPU/memory ceilings.
                      </div>
                      <div className="p-2.5 rounded-lg bg-slate-950 border border-indigo-500/20 text-xs">
                        <strong className="text-indigo-300">4. Gemini AI Integration:</strong> Provides contextual hints for runtime errors without giving away code answers.
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
