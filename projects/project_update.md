I'm updating the project pages on my portfolio website using my final presentation files. Project: [PROJECT NAME] → page: projects/[page].html

Where files go:
- Source materials (decks, reports): I put them in projects/project_files/ temporarily. Only read files from there. Don't search anywhere else on my computer. There may be more than one file per project; read all of them.
- project_files/ gets deleted after each project, so anything the page uses must be copied into assets/:
  - Images → assets/img/projects/ (name them [page]-[what-it-shows].webp)
  - PDFs to link (award letters, reports, certificates) → assets/docs/ (name them [page]-[what-it-is].pdf)
- Never link to anything inside project_files/.

What I want:
1. Read the materials fully (text and images), then update that page's content so it matches the final version, in this order: Overview (summary and key takeaways) > The problem (2-3 sentences: what was broken or unknown, and why it mattered) > My role > Approach (step by step) > Results/impact > Key takeaways > Links (GitHub, demo, report or slides, videos, award letters).
2. Keep each page's existing layout, CSS classes, navigation and styling exactly as they are. Only change content. Reuse the same HTML structure the page already has; don't add new frameworks or libraries.
3. Use only facts that appear in my materials. Never invent metrics, results or claims. If something important is missing (for example my exact role, or outcomes not measured yet), ask me before writing it.
   - Don't present results from papers or sources cited in the slides as our own results.
   - Describe my role honestly; don't say I built or coded something unless I confirm it.
4. Images: if a slide has a useful visual (screenshot, diagram, result chart), export it into assets/img/projects/, use a clear file name, add alt text, and compress it to a reasonable web size (about 1400px wide, under 150 KB). Don't use photos of people.
5. Do one project at a time. After each one, show me a short summary of what changed and the diff, then move to the next.
6. At the end, check every link and image path still works, open each page in a browser preview to confirm nothing breaks on desktop or mobile widths, and give me a list of anything you couldn't fill or weren't sure about.

My target roles are [AI / data science for operations], with my Industrial Engineering background as what sets me apart, so where it's true, highlight analysis, decision-making, process improvement and AI work.

Progress:
- [x] fluentx.html: updated Nov 2026 from the Entrepreneurship (Group D) deck and the Biometrics – AI deck. Images: fluentx-dmit-proposal-flow.webp, fluentx-fingerprint-matching.webp. Link: assets/docs/fluentx-best-business-idea-letter.pdf.
  - Still open: my role in the biometrics/AI part, whether to keep DMIT, and whether to label it a concept pitch.
- [ ] Other pages: not started.
