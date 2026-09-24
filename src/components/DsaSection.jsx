import React, { useState } from 'react'
import { LeetCodeLogo } from './TechLogos'
import { dsaTopics } from '../data/site'

export default function DsaSection() {
  // Interactive Visualizer: Mode toggle between 'bubble' and 'two-pointers'
  const [visualizerMode, setVisualizerMode] = useState('bubble')

  // Bubble Sort Visualizer State
  const initialBubbleArray = [29, 10, 14, 37, 13]
  const bubbleSteps = [
    { arr: [29, 10, 14, 37, 13], compare: [0, 1], action: 'Compare 29 & 10. Since 29 > 10, swap.', swapped: true },
    { arr: [10, 29, 14, 37, 13], compare: [1, 2], action: 'Compare 29 & 14. Since 29 > 14, swap.', swapped: true },
    { arr: [10, 14, 29, 37, 13], compare: [2, 3], action: 'Compare 29 & 37. In order, no swap.', swapped: false },
    { arr: [10, 14, 29, 37, 13], compare: [3, 4], action: 'Compare 37 & 13. Since 37 > 13, swap.', swapped: true },
    { arr: [10, 14, 29, 13, 37], compare: [-1, -1], action: 'Pass 1 complete: Largest value 37 is in position.', sortedIndex: 4 },
    { arr: [10, 14, 13, 29, 37], compare: [-1, -1], action: 'Pass 2 complete: 29 is now in position.', sortedIndex: 3 },
    { arr: [10, 13, 14, 29, 37], compare: [-1, -1], action: 'All elements sorted successfully!', sortedIndex: 0 },
  ]
  const [bubbleStepIndex, setBubbleStepIndex] = useState(0)

  // Two Pointers Visualizer State (Target Sum = 18 on sorted array)
  const twoPointersArray = [2, 7, 11, 15, 20]
  const targetSum = 18
  const twoPointerSteps = [
    { left: 0, right: 4, sum: 22, note: 'arr[0] + arr[4] = 2 + 20 = 22. Sum > 18, decrement right pointer.' },
    { left: 0, right: 3, sum: 17, note: 'arr[0] + arr[3] = 2 + 15 = 17. Sum < 18, increment left pointer.' },
    { left: 1, right: 3, sum: 22, note: 'arr[1] + arr[3] = 7 + 15 = 22. Sum > 18, decrement right pointer.' },
    { left: 1, right: 2, sum: 18, note: 'arr[1] + arr[2] = 7 + 11 = 18. Target 18 found at indices [1, 2]!', matched: true },
  ]
  const [twoPointerStepIndex, setTwoPointerStepIndex] = useState(0)

  const currentBubble = bubbleSteps[bubbleStepIndex]
  const currentTwoPointer = twoPointerSteps[twoPointerStepIndex]

  return (
    <section id="dsa" className="dsa-section" aria-label="Data Structures and Algorithms Section">
      <div className="section-container">
        {/* Section Eyebrow */}
        <div className="section-eyebrow">
          <span className="eyebrow-num">04 // ALGORITHMIC RIGOR</span>
          <span className="eyebrow-line" />
          <span className="eyebrow-badge">PROBLEM SOLVING</span>
        </div>

        {/* Section Header */}
        <div className="dsa-header-block">
          <div className="dsa-title-row">
            <div>
              <div className="dsa-platforms-badge">
                <span className="badge-dot" />
                <span>PRACTICING ON LEETCODE &amp; HACKERRANK</span>
              </div>
              <h2 className="dsa-section-title">
                DATA STRUCTURES &amp; <span className="text-dsa-accent">ALGORITHMS.</span>
              </h2>
            </div>

            {/* Subtle Vibe Accent: Pixel Bicep for Strength/Discipline */}
            <div className="dsa-vibe-accent-card" title="Deliberate practice and problem solving strength">
              <img
                src="/assets/vibe/vibe_1_strength.png"
                alt="Pixel art flexing bicep"
                className="dsa-bicep-img"
              />
              <div className="vibe-text">
                <span className="vibe-tag">DISCIPLINE</span>
                <span className="vibe-sub">Deliberate Practice</span>
              </div>
            </div>
          </div>

          <p className="dsa-section-subtitle">
            Learning to think in patterns and analyze space and time bounds.
            Focusing on problem decomposition, edge cases, and writing clean, correct algorithmic code.
          </p>
        </div>

        {/* Topics Worked With Grid */}
        <div className="dsa-topics-container">
          <span className="topics-heading-label">TOPICS &amp; PATTERNS WORKED WITH:</span>
          <div className="dsa-topics-grid">
            {dsaTopics.map((item) => (
              <div key={item.topic} className="dsa-topic-pill">
                <span className="topic-indicator">&bull;</span>
                <strong className="topic-title">{item.topic}</strong>
                <span className="topic-desc">{item.status}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Step-by-Step Algorithm Demonstration Box */}
        <div className="dsa-interactive-visualizer">
          <div className="visualizer-header-bar">
            <div className="visualizer-title-group">
              <span className="vis-tag">INTERACTIVE STEP-THROUGH</span>
              <h3 className="vis-title">
                {visualizerMode === 'bubble' ? 'Bubble Sort Step Simulator' : 'Two Pointers Target Sum Demo'}
              </h3>
            </div>

            <div className="visualizer-mode-toggle">
              <button
                type="button"
                className={`toggle-tab ${visualizerMode === 'bubble' ? 'is-active' : ''}`}
                onClick={() => {
                  setVisualizerMode('bubble')
                  setBubbleStepIndex(0)
                }}
              >
                1. Bubble Sort
              </button>
              <button
                type="button"
                className={`toggle-tab ${visualizerMode === 'two-pointers' ? 'is-active' : ''}`}
                onClick={() => {
                  setVisualizerMode('two-pointers')
                  setTwoPointerStepIndex(0)
                }}
              >
                2. Two Pointers
              </button>
            </div>
          </div>

          {/* Mode 1: Bubble Sort Visualizer */}
          {visualizerMode === 'bubble' && (
            <div className="visualizer-body">
              <div className="array-display-row">
                {currentBubble.arr.map((val, idx) => {
                  const isComparing = currentBubble.compare.includes(idx)
                  const isSorted = idx >= (currentBubble.sortedIndex ?? 99)

                  return (
                    <div
                      key={idx}
                      className={`array-bar-card ${isComparing ? 'is-comparing' : ''} ${isSorted ? 'is-sorted' : ''}`}
                    >
                      <span className="array-index-label">idx[{idx}]</span>
                      <div className="array-value-box">{val}</div>
                      {isComparing && <span className="comparing-tag">CMP</span>}
                    </div>
                  )
                })}
              </div>

              <div className="visualizer-step-hud">
                <div className="hud-step-counter">
                  <span>STEP {bubbleStepIndex + 1} OF {bubbleSteps.length}</span>
                </div>
                <p className="hud-step-action">{currentBubble.action}</p>

                <div className="hud-actions-row">
                  <button
                    type="button"
                    className="step-btn"
                    disabled={bubbleStepIndex === 0}
                    onClick={() => setBubbleStepIndex((prev) => Math.max(0, prev - 1))}
                  >
                    &larr; Previous Step
                  </button>
                  <button
                    type="button"
                    className="step-btn primary"
                    onClick={() => setBubbleStepIndex((prev) => (prev + 1) % bubbleSteps.length)}
                  >
                    {bubbleStepIndex === bubbleSteps.length - 1 ? 'Restart Visualizer &#x21bb;' : 'Next Step &rarr;'}
                  </button>
                </div>
              </div>

              <div className="complexity-callout">
                <span className="comp-tag">BUBBLE SORT COMPLEXITY:</span>
                <span className="comp-val">Time: O(N&sup2;) Worst/Avg &middot; Space: O(1) Auxiliary</span>
              </div>
            </div>
          )}

          {/* Mode 2: Two Pointers Visualizer */}
          {visualizerMode === 'two-pointers' && (
            <div className="visualizer-body">
              <div className="array-display-row">
                {twoPointersArray.map((val, idx) => {
                  const isLeft = idx === currentTwoPointer.left
                  const isRight = idx === currentTwoPointer.right
                  const isSelected = isLeft || isRight

                  return (
                    <div
                      key={idx}
                      className={`array-bar-card ${isSelected ? 'is-comparing' : ''} ${currentTwoPointer.matched && isSelected ? 'is-matched' : ''}`}
                    >
                      <span className="array-index-label">idx[{idx}]</span>
                      <div className="array-value-box">{val}</div>
                      {isLeft && <span className="pointer-tag left-ptr">LEFT &darr;</span>}
                      {isRight && <span className="pointer-tag right-ptr">RIGHT &darr;</span>}
                    </div>
                  )
                })}
              </div>

              <div className="visualizer-step-hud">
                <div className="hud-step-counter">
                  <span>STEP {twoPointerStepIndex + 1} OF {twoPointerSteps.length} &middot; TARGET = {targetSum}</span>
                </div>
                <p className="hud-step-action">{currentTwoPointer.note}</p>

                <div className="hud-actions-row">
                  <button
                    type="button"
                    className="step-btn"
                    disabled={twoPointerStepIndex === 0}
                    onClick={() => setTwoPointerStepIndex((prev) => Math.max(0, prev - 1))}
                  >
                    &larr; Previous Step
                  </button>
                  <button
                    type="button"
                    className="step-btn primary"
                    onClick={() => setTwoPointerStepIndex((prev) => (prev + 1) % twoPointerSteps.length)}
                  >
                    {twoPointerStepIndex === twoPointerSteps.length - 1 ? 'Restart Visualizer &#x21bb;' : 'Next Step &rarr;'}
                  </button>
                </div>
              </div>

              <div className="complexity-callout">
                <span className="comp-tag">TWO POINTERS ON SORTED ARRAY:</span>
                <span className="comp-val">Time: O(N) Linear Scan &middot; Space: O(1) In-Place</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
