import { useState, useEffect } from "react";

const phases = [
  {
    id: 1,
    name: "RESET",
    emoji: "🌱",
    weeks: "Week 1–2",
    dates: "Mar 8 – Mar 21",
    color: "#7EC8A4",
    accent: "#d0f0e0",
    tagline: "Clear the pantry. Clear the mind.",
    goal: "Build consistency, use perishables, establish baseline habits",
    focus: "Use fresh produce NOW (salad items, cucumber, broccoli, yogurt). Establish a daily walk routine. Start journaling.",
    meals: [
      { day: "Sun/Wed", name: "Mediterranean Tuna Bowl", desc: "Tuna over rice with cucumber, olive oil, lemon zest, za'atar", badge: "USE FIRST 🥒" },
      { day: "Mon/Thu", name: "Spiced Lentil Soup", desc: "Lentils, canned tomatoes, cumin, turmeric, smoked paprika", badge: "Budget ✓" },
      { day: "Tue/Fri", name: "Tofu Stir-fry", desc: "Tofu with broccoli, soy sauce, sesame oil, ginger over rice", badge: "Protein ✓" },
      { day: "Sat", name: "Bean Tacos", desc: "Black beans, salsa, cheese, yogurt (as sour cream), spiced with Mexican blend", badge: "Fun meal 🎉" },
    ],
    snacks: ["Seaweed + nuts", "Yogurt + a drizzle of nut milk", "Cucumber slices + hummus (make from canned chickpeas)"],
    workout: {
      days: "6 days/week",
      sessions: [
        { label: "Day 1 · Exercise Bike", detail: "30 min easy ride, resistance level 2–3. Seat height should let your knee have a slight bend at the bottom — protects the joint. Just get comfortable and find your rhythm." },
        { label: "Day 2 · Upper Body Strength", detail: "3×12 wall push-ups, 3×12 seated overhead press (water jugs/cans), 3×15 seated tricep dips on chair edge, 3×12 bent-over rows. Rest 45 sec between sets." },
        { label: "Day 3 · Rowing Machine + Core", detail: "20 min easy row (focus on form: push with legs first, then lean back, then pull arms). Rest. Then 15 min core: dead bugs, seated twists, pelvic tilts, modified bird dogs." },
        { label: "Day 4 · Lower Body (Joint-Safe)", detail: "3×15 glute bridges, 3×12 standing glute kickbacks, 3×15 clamshells (lying down — great for hips and ankles), 3×12 standing side leg raises. NO deep knee bends." },
        { label: "Day 5 · Elliptical", detail: "30 min on the elliptical, resistance 2–3. The elliptical is your best friend — full body, zero impact on hips/knees/ankles. Go at a conversational pace today." },
        { label: "Day 6 · Full Body Flow + Stretch", detail: "15 min light bodyweight circuit (halved reps from Day 2 + Day 4) + 20 min full body stretch. Focus on hips, ankles, and knees." },
      ]
    },
    journal: [
      "How does my body feel right now — honestly?",
      "What does 'feeling good in my bikini' actually mean to me beyond appearance?",
      "What's one small win I had today, no matter how tiny?",
      "What am I eating when I'm stressed vs. when I'm calm?"
    ],
    incentive: { milestone: "Complete 8 of 14 days of journaling + 4 workouts/week", reward: "🛁 Treat yourself to a full self-care night — face mask, bath, your show, no guilt." }
  },
  {
    id: 2,
    name: "BUILD",
    emoji: "🔥",
    weeks: "Week 3–5",
    dates: "Mar 22 – Apr 11",
    color: "#F4A460",
    accent: "#fdebd0",
    tagline: "Momentum is everything.",
    goal: "Increase intensity, diversify meals, build strength foundation",
    focus: "Transition to pantry staples + frozen veggies (budget-friendly). Add structure to workouts. Drink more water.",
    meals: [
      { day: "Sun/Wed", name: "Asian Peanut Noodles", desc: "Ramen noodles, peanut butter, soy sauce, sesame, frozen broccoli, tofu", badge: "Budget ✓" },
      { day: "Mon/Thu", name: "Tuscan White Bean Pasta", desc: "Cannellini beans, canned tomatoes, pasta, garlic, olive oil, Italian herbs", badge: "Filling ✓" },
      { day: "Tue/Fri", name: "Smoky Chicken Tikka (your way)", desc: "Chicken in yogurt + tikka masala paste, served over rice. Heavy sauce = no dry chicken.", badge: "Flavor-forward 🌶️" },
      { day: "Sat", name: "Spiced Tomato & Chickpea Stew", desc: "Chickpeas simmered in harissa-spiced tomato sauce, served over rice or with warm bread", badge: "Brunch energy ✨" },
    ],
    snacks: ["Nuts + a piece of fruit (add to shopping)", "Nut milk smoothie base + frozen fruit", "Seaweed + ramen broth as a light soup"],
    workout: {
      days: "6 days/week",
      sessions: [
        { label: "Day 1 · Elliptical Intervals", detail: "35 min: 3 min moderate (resistance 3) + 1 min push hard (resistance 5). Repeat 7x. Arms on the handles — this is a full body burn. Great on the hips." },
        { label: "Day 2 · Upper Body Strength+", detail: "4×12 wall push-ups (try incline on counter), 4×12 upright rows (jugs), 4×15 lateral raises, 4×12 seated bicep curls, 3×15 shoulder press. Rest 40 sec." },
        { label: "Day 3 · Rowing Machine Intervals + Core", detail: "25 min row: 2 min steady / 30 sec hard pull. Repeat. Then 15 min core: dead bugs, modified side plank, reverse crunches, plank on forearms (30 sec holds)." },
        { label: "Day 4 · Lower Body Strength+", detail: "4×15 glute bridges, 4×12 single-leg glute bridge (alternate carefully), 4×15 clamshells with resistance (tied scarf), 4×12 donkey kicks, 3×30 sec wall sit." },
        { label: "Day 5 · Bike Endurance + Standing Moves", detail: "20 min bike (resistance 4, steady), then 15 min: seated jabs, arm slams, standing bicycle crunches, low side steps. No rest between. Back-to-back burn." },
        { label: "Day 6 · Active Recovery + Mobility", detail: "25 min: hip flexor stretches, ankle circles, seated hamstring stretch, shoulder rolls, spinal twists. Optional: 10 min very easy elliptical or bike to loosen up." },
      ]
    },
    journal: [
      "What changed in my body or energy this week?",
      "When did I feel the strongest this week — physically or mentally?",
      "Am I eating enough? Am I eating mindfully or on autopilot?",
      "What's one thing I want to do differently next week?"
    ],
    incentive: { milestone: "Complete 3 full weeks of the BUILD phase (workouts + meals)", reward: "💄 New workout set OR a small beauty treat you've been eyeing." }
  },
  {
    id: 3,
    name: "ELEVATE",
    emoji: "🌊",
    weeks: "Week 6–8",
    dates: "Apr 12 – May 2",
    color: "#5B9BD5",
    accent: "#d6eaf8",
    tagline: "You're not starting — you're leveling up.",
    goal: "Dial in nutrition, boost cardio, build visible confidence",
    focus: "Reduce processed snacks (ramen as occasional treat). Prioritize protein at every meal. Increase walk/jog duration.",
    meals: [
      { day: "Sun/Wed", name: "Lentil & Spinach Curry", desc: "Red lentils, canned tomatoes, frozen spinach, coconut (sub nut milk), garam masala", badge: "Iron boost 💪" },
      { day: "Mon/Thu", name: "Crispy Tofu Tacos", desc: "Pan-fried tofu in chipotle-cumin marinade, with black beans, salsa, shredded cabbage + yogurt drizzle", badge: "High protein ✓" },
      { day: "Tue/Fri", name: "Mediterranean Rice Bowl", desc: "Brown rice, white beans, roasted frozen veggies, feta (small amount), lemon-herb dressing", badge: "Balanced ✓" },
      { day: "Sat", name: "Tuna Pasta Puttanesca", desc: "Tuna, canned tomatoes, capers, olives, pasta. Rich, satisfying, zero effort.", badge: "Pantry hero 🥫" },
    ],
    snacks: ["Greek yogurt + nuts", "Tempeh strips (pan-fried with soy sauce)", "Edamame (frozen, budget-friendly add)"],
    workout: {
      days: "6 days/week",
      sessions: [
        { label: "Day 1 · Elliptical Endurance", detail: "45 min elliptical. First 10 min warm up (resistance 3), middle 25 min push (resistance 5–6, faster stride), last 10 min cool down. This is your primary fat-burning session." },
        { label: "Day 2 · Push Day (Upper)", detail: "4×15 incline push-ups (hands on counter), 4×12 tricep overhead extensions, 4×15 chest press lying down (jugs), 4×12 front raises. Slow the tempo — 3 sec down, 1 sec up." },
        { label: "Day 3 · Rowing Machine + Pull + Core", detail: "30 min row: 3 min steady / 1 min sprint (hard pulls). Then: 4×12 bent-over rows, 4×12 rear delt flys, 3×20 reverse crunches, 3×15 lying leg raises." },
        { label: "Day 4 · Glute & Hip Focus", detail: "4×20 glute bridges, 4×15 single-leg glute bridge, 4×15 fire hydrants, 4×12 donkey kicks, 4×15 standing kickbacks. Hip strengthening directly protects your old injuries." },
        { label: "Day 5 · Bike HIIT", detail: "30 min bike intervals: 2 min easy (resistance 3) / 1 min all-out (resistance 7–8, fast pedal). Repeat 8x. Seated the whole time — no joint stress, massive calorie burn." },
        { label: "Day 6 · Yoga Flow + Stretch", detail: "YouTube: 'low impact yoga beginners 30 min' OR 'chair yoga for weight loss'. Builds flexibility, reduces joint inflammation, burns more than you think. Don't skip this." },
      ]
    },
    journal: [
      "How has my relationship with food changed since week 1?",
      "What does my body do now that it couldn't (or wouldn't) do in March?",
      "Where am I being too hard on myself? Where could I be prouder?",
      "If June-me could send a message back, what would she say?"
    ],
    incentive: { milestone: "Hit 30 total workout sessions across Phases 1–3", reward: "👙 Buy something for the beach/pool. You earned it — wear it before June." }
  },
  {
    id: 4,
    name: "GLOW",
    emoji: "✨",
    weeks: "Week 9–11",
    dates: "May 3 – May 23",
    color: "#C77DBA",
    accent: "#f5e6f5",
    tagline: "Polish, not punish.",
    goal: "Refine habits, reduce bloat, build confidence in your body",
    focus: "Anti-inflammatory foods. Reduce excess sodium. Stay hydrated (aim for 8 glasses). Maintain strength.",
    meals: [
      { day: "Sun/Wed", name: "Turmeric Rice & Bean Bowl", desc: "Rice cooked with turmeric + cumin seeds, topped with beans, roasted frozen veggies, tahini drizzle", badge: "Anti-inflammatory 🌿" },
      { day: "Mon/Thu", name: "Miso Tofu Soup", desc: "Tofu cubes, miso paste, seaweed, green onion, mushrooms. Light and nourishing.", badge: "Gut health ✓" },
      { day: "Tue/Fri", name: "Greek Lentil Salad", desc: "Cooked lentils, cucumber, tomato, olives, feta, lemon vinaigrette", badge: "Fresh + filling ✓" },
      { day: "Sat", name: "Spiced Chickpea Bowl", desc: "Roasted chickpeas (canned), over yogurt sauce, with warm pita or rice, sumac + paprika", badge: "Flavor bomb 🎯" },
    ],
    snacks: ["Cucumber + lemon + a pinch of tajín", "Nut mix (no added salt)", "Yogurt with cinnamon + honey"],
    workout: {
      days: "6 days/week",
      sessions: [
        { label: "Day 1 · Elliptical Power Session", detail: "50 min elliptical. Warm up 5 min, then alternate: 5 min forward stride (resistance 6) / 5 min backward stride (resistance 5 — hits glutes and hamstrings differently). Cool down 5 min." },
        { label: "Day 2 · Full Upper Body Superset", detail: "No rest between paired moves. A: incline push-up + bent-over row (4×12). B: lateral raise + bicep curl (4×12). C: tricep dip + overhead press (3×15). Rest 60 sec between supersets." },
        { label: "Day 3 · Row + Pilates Core", detail: "25 min rowing machine (your strongest row session yet — push the pace). Then YouTube: 'Pilates core 20 min no jumping'. Rowing + Pilates is a transformative combo for your midsection." },
        { label: "Day 4 · Lower Body Superset", detail: "A: glute bridge + clamshell (4×15). B: donkey kick + fire hydrant (4×12). C: standing side raise + kickback (4×12). Rest 60 sec. You should feel this in your glutes, not your knees." },
        { label: "Day 5 · Bike + Core Combo", detail: "30 min bike (resistance 6, steady state — this should feel hard but sustainable) + 20 min core: dead bugs, reverse crunches, plank shoulder taps (knees down), seated Russian twists." },
        { label: "Day 6 · Mobility + Intentional Rest", detail: "20 min full joint mobility (ankles, hips, knees, shoulders — YouTube 'joint mobility routine'). Then rest. You've earned it. This day is what prevents injury and keeps you going." },
      ]
    },
    journal: [
      "List 5 things your body has done for you this month.",
      "What food feels like fuel vs. what feels like numbing?",
      "Who do I want to feel like on the beach — not look like, feel like?",
      "What habit from this program do I want to keep forever?"
    ],
    incentive: { milestone: "Complete the full GLOW phase with 80%+ consistency", reward: "💅 Full spa day or pamper session. Nails, skin, hair — you choose the luxury." }
  },
  {
    id: 5,
    name: "RADIATE",
    emoji: "🌺",
    weeks: "Week 12–13",
    dates: "May 24 – June 7",
    color: "#E8734A",
    accent: "#fde8df",
    tagline: "June is already yours.",
    goal: "Feel your absolute best. Final prep. Celebrate.",
    focus: "Hydration, sleep, confidence. No crash diets, no last-minute panic. You've done the work.",
    meals: [
      { day: "Sun/Wed", name: "Light Tuna Salad Wraps", desc: "Tuna, Greek yogurt (instead of mayo), cucumber, herbs in lettuce wraps", badge: "Light & fresh ✓" },
      { day: "Mon/Thu", name: "Energizing Bean Soup", desc: "White beans, vegetable broth, lemon, greens. Simple and cleansing.", badge: "Hydrating ✓" },
      { day: "Tue/Fri", name: "Your Favorite From the Program", desc: "Pick the meal that made you happiest. Cook it with intention.", badge: "You earned it 🌟" },
      { day: "Sat", name: "Celebration Dinner", desc: "Cook something you love with the people you love. Food is joy.", badge: "Life is for living 🥂" },
    ],
    snacks: ["Watermelon or cucumber (hydrating)", "Nut milk smoothie", "Seaweed + a few nuts"],
    workout: {
      days: "6 days/week (peak + taper)",
      sessions: [
        { label: "Day 1 · Elliptical Victory Lap", detail: "50 min elliptical — your strongest session of the program. Push resistance to 7 for the middle 30 min. You've built up to this. Let it show." },
        { label: "Day 2 · Full Body Strength (Your Routine)", detail: "30 min — design your own circuit using your favorite moves from all phases. You know your body now. You've earned the right to lead your own workout." },
        { label: "Day 3 · Row + Stretch", detail: "20 min rowing (moderate pace, focus on form and breath) + 25 min full body stretch. Long, intentional, grateful." },
        { label: "Day 4 · Bike + Light Core", detail: "25 min bike (comfortable pace, resistance 5) + 15 min core. Maintenance mode — feel strong, not depleted." },
        { label: "Day 5 · Dance or Joyful Movement", detail: "Put on music that makes you feel like yourself. Move however feels good for 30 min. Bike, elliptical, living room dance party — your call. This is a celebration." },
        { label: "Day 6 · Final Stretch + Reflect", detail: "30 min full body mobility and stretch. No machines today. Just you, the floor, and the knowledge that you showed up for yourself for 13 weeks." },
      ]
    },
    journal: [
      "Compare: how did I feel on March 8 vs. today?",
      "What was the hardest week? What got me through it?",
      "What does confidence feel like in my body right now?",
      "Write a love letter to yourself. Seriously. Do it."
    ],
    incentive: { milestone: "Completing the full 13-week program", reward: "🌺 THE BIKINI. A beach day. A photo. A moment that's all yours." }
  }
];

const shoppingAddons = [
  { item: "Frozen broccoli & spinach", reason: "Budget-friendly, lasts all program", priority: "Essential" },
  { item: "Frozen edamame", reason: "Quick protein snack", priority: "Essential" },
  { item: "Tempeh", reason: "Affordable protein, great texture", priority: "Essential" },
  { item: "Frozen fruit (mango, berries)", reason: "Smoothies & yogurt bowls", priority: "Essential" },
  { item: "Chickpeas (extra cans)", reason: "Core protein through all phases", priority: "Essential" },
  { item: "Tahini", reason: "Dressings, sauces, Mediterranean base", priority: "Nice to have" },
  { item: "Lemons", reason: "Brightens everything", priority: "Nice to have" },
  { item: "Brown rice", reason: "More fiber than white", priority: "Nice to have" },
  { item: "Miso paste", reason: "Phase 4 soups, gut health", priority: "Nice to have" },
];

export default function BikiniFitPlan() {
  const [activePhase, setActivePhase] = useState(0);
  const [activeTab, setActiveTab] = useState("meals");
  const [journalEntries, setJournalEntries] = useState({});
  const [completedWorkouts, setCompletedWorkouts] = useState({});
  const [completedMilestones, setCompletedMilestones] = useState({});
  const [journalInput, setJournalInput] = useState("");
  const [activePrompt, setActivePrompt] = useState(null);
  const [showShopping, setShowShopping] = useState(false);
  const [totalWorkouts, setTotalWorkouts] = useState(0);

  const phase = phases[activePhase];

  const toggleWorkout = (phaseId, sessionIdx) => {
    const key = `${phaseId}-${sessionIdx}`;
    setCompletedWorkouts(prev => {
      const updated = { ...prev, [key]: !prev[key] };
      const total = Object.values(updated).filter(Boolean).length;
      setTotalWorkouts(total);
      return updated;
    });
  };

  const saveJournal = () => {
    if (!journalInput.trim() || activePrompt === null) return;
    const key = `${phase.id}-${activePrompt}`;
    setJournalEntries(prev => ({ ...prev, [key]: journalInput }));
    setJournalInput("");
    setActivePrompt(null);
  };

  const toggleMilestone = (phaseId) => {
    setCompletedMilestones(prev => ({ ...prev, [phaseId]: !prev[phaseId] }));
  };

  const progressPercent = Math.min(100, Math.round((totalWorkouts / 50) * 100));

  return (
    <div style={{
      fontFamily: "'Georgia', 'Times New Roman', serif",
      background: "linear-gradient(135deg, #fdf6ee 0%, #f0f7f4 50%, #fdf0f8 100%)",
      minHeight: "100vh",
      padding: "0",
      color: "#2d2d2d"
    }}>

      {/* Header */}
      <div style={{
        background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 60%, #0f3460 100%)",
        padding: "48px 24px 36px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden"
      }}>
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, bottom: 0,
          backgroundImage: "radial-gradient(circle at 20% 50%, rgba(126,200,164,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(244,164,96,0.15) 0%, transparent 40%)",
          pointerEvents: "none"
        }} />
        <div style={{ fontSize: "13px", letterSpacing: "4px", color: "#7EC8A4", marginBottom: "12px", textTransform: "uppercase" }}>
          Your Personal Program
        </div>
        <h1 style={{
          fontSize: "clamp(28px, 6vw, 52px)",
          fontWeight: "normal",
          color: "#fff",
          margin: "0 0 8px",
          letterSpacing: "2px",
          fontStyle: "italic"
        }}>
          Feel Good in Your Bikini
        </h1>
        <div style={{ fontSize: "clamp(13px, 2.5vw, 16px)", color: "#b0c4d8", marginBottom: "24px", letterSpacing: "1px" }}>
          March 8 → June 7 · 13 Weeks · Built Around Your Pantry
        </div>

        {/* Overall Progress */}
        <div style={{ maxWidth: "400px", margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", color: "#7EC8A4", marginBottom: "6px" }}>
            <span>TOTAL WORKOUTS</span>
            <span>{totalWorkouts} / 50+ sessions</span>
          </div>
          <div style={{ background: "rgba(255,255,255,0.1)", borderRadius: "20px", height: "8px", overflow: "hidden" }}>
            <div style={{
              background: "linear-gradient(90deg, #7EC8A4, #F4A460, #C77DBA)",
              height: "100%",
              width: `${progressPercent}%`,
              borderRadius: "20px",
              transition: "width 0.6s ease"
            }} />
          </div>
        </div>

        {/* Shopping list toggle */}
        <button onClick={() => setShowShopping(!showShopping)} style={{
          marginTop: "20px",
          background: "rgba(255,255,255,0.1)",
          border: "1px solid rgba(255,255,255,0.2)",
          color: "#fff",
          padding: "8px 20px",
          borderRadius: "20px",
          cursor: "pointer",
          fontSize: "13px",
          letterSpacing: "1px"
        }}>
          🛒 {showShopping ? "Hide" : "Show"} Pantry Add-Ons List
        </button>

        {showShopping && (
          <div style={{
            maxWidth: "600px", margin: "16px auto 0",
            background: "rgba(255,255,255,0.07)", borderRadius: "12px",
            padding: "16px", textAlign: "left"
          }}>
            <div style={{ color: "#F4A460", fontSize: "12px", letterSpacing: "2px", marginBottom: "10px" }}>BUDGET-FRIENDLY ADDS</div>
            {shoppingAddons.map((s, i) => (
              <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "6px 0", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                <span style={{ color: "#fff", fontSize: "14px" }}>✦ {s.item}</span>
                <span style={{ fontSize: "11px", color: s.priority === "Essential" ? "#7EC8A4" : "#b0c4d8" }}>{s.priority}</span>
              </div>
            ))}
            <div style={{ color: "#7EC8A4", fontSize: "12px", marginTop: "10px", fontStyle: "italic" }}>
              💡 Frozen veggies = same nutrition as fresh, fraction of the cost.
            </div>
          </div>
        )}
      </div>

      {/* Phase Selector */}
      <div style={{
        display: "flex", overflowX: "auto", gap: "0",
        background: "#1a1a2e", padding: "0",
        borderBottom: "3px solid #0f3460"
      }}>
        {phases.map((p, i) => (
          <button key={p.id} onClick={() => { setActivePhase(i); setActiveTab("meals"); }}
            style={{
              flex: "1", minWidth: "120px", padding: "14px 8px",
              background: activePhase === i ? p.color : "transparent",
              border: "none", cursor: "pointer",
              color: activePhase === i ? "#1a1a2e" : "#8899aa",
              fontFamily: "Georgia, serif",
              fontWeight: activePhase === i ? "bold" : "normal",
              fontSize: "13px",
              transition: "all 0.3s ease",
              display: "flex", flexDirection: "column", alignItems: "center", gap: "4px"
            }}>
            <span style={{ fontSize: "20px" }}>{p.emoji}</span>
            <span style={{ letterSpacing: "1px", fontSize: "11px" }}>{p.name}</span>
            <span style={{ fontSize: "10px", opacity: 0.8 }}>{p.weeks}</span>
          </button>
        ))}
      </div>

      {/* Phase Content */}
      <div style={{ maxWidth: "860px", margin: "0 auto", padding: "24px 16px" }}>

        {/* Phase Header */}
        <div style={{
          background: `linear-gradient(135deg, ${phase.accent} 0%, #fff 100%)`,
          borderRadius: "16px", padding: "28px",
          borderLeft: `6px solid ${phase.color}`,
          marginBottom: "24px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.06)"
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "12px" }}>
            <div>
              <div style={{ fontSize: "11px", letterSpacing: "3px", color: phase.color, marginBottom: "6px", textTransform: "uppercase" }}>
                Phase {phase.id} · {phase.dates}
              </div>
              <h2 style={{ fontSize: "clamp(20px, 4vw, 32px)", margin: "0 0 6px", fontWeight: "normal" }}>
                {phase.emoji} {phase.name}
              </h2>
              <p style={{ fontSize: "16px", color: "#666", margin: "0 0 12px", fontStyle: "italic" }}>"{phase.tagline}"</p>
              <p style={{ fontSize: "14px", color: "#444", margin: 0, lineHeight: "1.6" }}>
                <strong>Goal:</strong> {phase.goal}
              </p>
            </div>
            <div style={{
              background: phase.color, color: "#fff",
              padding: "8px 16px", borderRadius: "20px",
              fontSize: "13px", whiteSpace: "nowrap", alignSelf: "flex-start"
            }}>
              {phase.workout.days}
            </div>
          </div>
          <div style={{
            marginTop: "14px", padding: "12px 16px",
            background: "rgba(0,0,0,0.04)", borderRadius: "8px",
            fontSize: "13px", color: "#555", lineHeight: "1.6"
          }}>
            💡 <strong>This phase focus:</strong> {phase.focus}
          </div>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: "8px", marginBottom: "20px", flexWrap: "wrap" }}>
          {["meals", "workouts", "journal", "milestone"].map(tab => (
            <button key={tab} onClick={() => setActiveTab(tab)} style={{
              padding: "10px 20px",
              background: activeTab === tab ? phase.color : "#fff",
              color: activeTab === tab ? "#fff" : "#666",
              border: `2px solid ${activeTab === tab ? phase.color : "#e0e0e0"}`,
              borderRadius: "24px", cursor: "pointer",
              fontFamily: "Georgia, serif",
              fontSize: "13px", letterSpacing: "0.5px",
              transition: "all 0.2s ease",
              textTransform: "capitalize"
            }}>
              {tab === "meals" ? "🍽️ Meals" : tab === "workouts" ? "💪 Workouts" : tab === "journal" ? "📓 Journal" : "🏆 Milestone"}
            </button>
          ))}
        </div>

        {/* MEALS TAB */}
        {activeTab === "meals" && (
          <div>
            <div style={{ display: "grid", gap: "14px", marginBottom: "20px" }}>
              {phase.meals.map((meal, i) => (
                <div key={i} style={{
                  background: "#fff", borderRadius: "12px", padding: "18px 20px",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                  borderTop: `3px solid ${phase.color}`,
                  display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "12px"
                }}>
                  <div>
                    <div style={{ fontSize: "11px", color: "#999", letterSpacing: "1px", marginBottom: "4px" }}>{meal.day}</div>
                    <div style={{ fontSize: "17px", fontWeight: "bold", marginBottom: "6px" }}>{meal.name}</div>
                    <div style={{ fontSize: "14px", color: "#666", lineHeight: "1.5" }}>{meal.desc}</div>
                  </div>
                  <span style={{
                    background: phase.accent, color: phase.color,
                    padding: "4px 10px", borderRadius: "12px",
                    fontSize: "11px", whiteSpace: "nowrap", flexShrink: 0,
                    border: `1px solid ${phase.color}40`
                  }}>
                    {meal.badge}
                  </span>
                </div>
              ))}
            </div>

            {/* Snacks */}
            <div style={{ background: "#fff", borderRadius: "12px", padding: "18px 20px", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
              <div style={{ fontSize: "13px", letterSpacing: "2px", color: phase.color, marginBottom: "12px" }}>DAILY SNACKS</div>
              {phase.snacks.map((s, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "8px", padding: "6px 0", fontSize: "14px", color: "#555" }}>
                  <span style={{ color: phase.color }}>◆</span> {s}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* WORKOUTS TAB */}
        {activeTab === "workouts" && (
          <div style={{ display: "grid", gap: "12px" }}>
            {phase.workout.sessions.map((session, i) => {
              const key = `${phase.id}-${i}`;
              const done = !!completedWorkouts[key];
              return (
                <div key={i} style={{
                  background: done ? phase.accent : "#fff",
                  borderRadius: "12px", padding: "18px 20px",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                  display: "flex", justifyContent: "space-between", alignItems: "flex-start",
                  border: done ? `2px solid ${phase.color}` : "2px solid transparent",
                  transition: "all 0.3s ease"
                }}>
                  <div>
                    <div style={{ fontSize: "17px", fontWeight: "bold", marginBottom: "6px", color: done ? phase.color : "#2d2d2d" }}>
                      {done ? "✓ " : ""}{session.label}
                    </div>
                    <div style={{ fontSize: "14px", color: "#666", lineHeight: "1.5" }}>{session.detail}</div>
                  </div>
                  <button onClick={() => toggleWorkout(phase.id, i)} style={{
                    background: done ? phase.color : "transparent",
                    border: `2px solid ${phase.color}`,
                    color: done ? "#fff" : phase.color,
                    width: "40px", height: "40px", borderRadius: "50%",
                    cursor: "pointer", fontSize: "16px", flexShrink: 0,
                    transition: "all 0.2s ease"
                  }}>
                    {done ? "✓" : "○"}
                  </button>
                </div>
              );
            })}
            <div style={{ textAlign: "center", fontSize: "13px", color: "#999", marginTop: "8px" }}>
              Tap ○ to mark a session complete · Total logged: {totalWorkouts}
            </div>
          </div>
        )}

        {/* JOURNAL TAB */}
        {activeTab === "journal" && (
          <div>
            <div style={{ marginBottom: "16px", fontSize: "14px", color: "#666", fontStyle: "italic", lineHeight: "1.6" }}>
              Choose a prompt, write your thoughts. No wrong answers. No one is grading this.
            </div>
            <div style={{ display: "grid", gap: "12px" }}>
              {phase.journal.map((prompt, i) => {
                const key = `${phase.id}-${i}`;
                const saved = journalEntries[key];
                return (
                  <div key={i} style={{
                    background: "#fff", borderRadius: "12px",
                    boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                    overflow: "hidden"
                  }}>
                    <div
                      onClick={() => setActivePrompt(activePrompt === i ? null : i)}
                      style={{
                        padding: "16px 20px", cursor: "pointer",
                        display: "flex", justifyContent: "space-between", alignItems: "center",
                        background: saved ? phase.accent : "#fff"
                      }}>
                      <div style={{ fontSize: "14px", fontStyle: "italic", color: "#333", lineHeight: "1.5" }}>
                        {saved ? "✍️ " : "◆ "}{prompt}
                      </div>
                      <span style={{ color: phase.color, fontSize: "18px", flexShrink: 0, marginLeft: "12px" }}>
                        {activePrompt === i ? "−" : "+"}
                      </span>
                    </div>
                    {activePrompt === i && (
                      <div style={{ padding: "0 20px 16px" }}>
                        {saved && (
                          <div style={{
                            background: phase.accent, borderRadius: "8px", padding: "12px",
                            fontSize: "13px", color: "#555", marginBottom: "10px", fontStyle: "italic"
                          }}>
                            {saved}
                          </div>
                        )}
                        <textarea
                          value={journalInput}
                          onChange={e => setJournalInput(e.target.value)}
                          placeholder="Write your thoughts here..."
                          style={{
                            width: "100%", minHeight: "100px", padding: "12px",
                            borderRadius: "8px", border: `1px solid ${phase.color}60`,
                            fontFamily: "Georgia, serif", fontSize: "14px",
                            lineHeight: "1.6", resize: "vertical", color: "#333",
                            boxSizing: "border-box"
                          }}
                        />
                        <button onClick={saveJournal} style={{
                          marginTop: "8px", background: phase.color,
                          color: "#fff", border: "none", padding: "10px 20px",
                          borderRadius: "20px", cursor: "pointer",
                          fontFamily: "Georgia, serif", fontSize: "13px"
                        }}>
                          Save Entry
                        </button>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* MILESTONE TAB */}
        {activeTab === "milestone" && (
          <div>
            <div style={{
              background: "#fff", borderRadius: "16px", padding: "28px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
              borderTop: `6px solid ${phase.color}`,
              textAlign: "center"
            }}>
              <div style={{ fontSize: "48px", marginBottom: "16px" }}>{phase.emoji}</div>
              <div style={{ fontSize: "12px", letterSpacing: "3px", color: phase.color, marginBottom: "12px" }}>
                PHASE {phase.id} MILESTONE
              </div>
              <h3 style={{ fontSize: "20px", fontWeight: "normal", margin: "0 0 20px", lineHeight: "1.5" }}>
                {phase.incentive.milestone}
              </h3>
              <div style={{
                background: phase.accent, borderRadius: "12px", padding: "20px",
                marginBottom: "24px"
              }}>
                <div style={{ fontSize: "12px", letterSpacing: "2px", color: phase.color, marginBottom: "8px" }}>YOUR REWARD</div>
                <div style={{ fontSize: "18px", lineHeight: "1.5" }}>{phase.incentive.reward}</div>
              </div>
              <button
                onClick={() => toggleMilestone(phase.id)}
                style={{
                  background: completedMilestones[phase.id] ? phase.color : "transparent",
                  border: `2px solid ${phase.color}`,
                  color: completedMilestones[phase.id] ? "#fff" : phase.color,
                  padding: "14px 32px", borderRadius: "30px",
                  cursor: "pointer", fontFamily: "Georgia, serif",
                  fontSize: "15px", letterSpacing: "1px",
                  transition: "all 0.3s ease"
                }}>
                {completedMilestones[phase.id] ? "✓ Milestone Achieved! Claim your reward." : "Mark Milestone Complete"}
              </button>
              {completedMilestones[phase.id] && (
                <div style={{ marginTop: "16px", fontSize: "14px", color: "#888", fontStyle: "italic" }}>
                  You earned it. Don't skip this reward — it's part of the program. 🌺
                </div>
              )}
            </div>

            {/* All milestones overview */}
            <div style={{ marginTop: "20px", background: "#fff", borderRadius: "12px", padding: "20px", boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}>
              <div style={{ fontSize: "12px", letterSpacing: "2px", color: "#999", marginBottom: "14px" }}>ALL PHASE REWARDS</div>
              {phases.map(p => (
                <div key={p.id} style={{
                  display: "flex", alignItems: "center", gap: "12px",
                  padding: "10px 0", borderBottom: "1px solid #f0f0f0",
                  opacity: completedMilestones[p.id] ? 1 : 0.5
                }}>
                  <span style={{ fontSize: "20px" }}>{p.emoji}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: "13px", fontWeight: "bold" }}>{p.name} · {p.weeks}</div>
                    <div style={{ fontSize: "12px", color: "#888" }}>{p.incentive.reward}</div>
                  </div>
                  <span style={{ color: p.color, fontSize: "18px" }}>{completedMilestones[p.id] ? "✓" : "○"}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div style={{
        textAlign: "center", padding: "32px 24px",
        color: "#aaa", fontSize: "13px", fontStyle: "italic",
        borderTop: "1px solid #e8e8e8", marginTop: "16px"
      }}>
        "The goal isn't to be perfect. The goal is to feel at home in your body." 🌊<br />
        <span style={{ fontSize: "11px", letterSpacing: "2px", color: "#ccc" }}>MAR 8 – JUN 7 · YOUR PROGRAM · YOUR PACE</span>
      </div>
    </div>
  );
}
