# Graph Report - .  (2026-05-14)

## Corpus Check
- Large corpus: 80 files · ~1,390,827 words. Semantic extraction will be expensive (many Claude tokens). Consider running on a subfolder, or use --no-semantic to run AST-only.

## Summary
- 84 nodes · 90 edges · 13 communities (10 shown, 3 thin omitted)
- Extraction: 94% EXTRACTED · 6% INFERRED · 0% AMBIGUOUS · INFERRED: 5 edges (avg confidence: 0.91)
- Token cost: 24,725 input · 6,182 output

## Community Hubs (Navigation)
- [[_COMMUNITY_About & Layout Shell|About & Layout Shell]]
- [[_COMMUNITY_Public Assets & CRA Scaffold|Public Assets & CRA Scaffold]]
- [[_COMMUNITY_Home Page Sections|Home Page Sections]]
- [[_COMMUNITY_App Entry & Routing|App Entry & Routing]]
- [[_COMMUNITY_Projects Page & Cards|Projects Page & Cards]]
- [[_COMMUNITY_Build Tooling|Build Tooling]]
- [[_COMMUNITY_Legacy ProjectsData|Legacy ProjectsData]]

## God Nodes (most connected - your core abstractions)
1. `React App HTML Template` - 9 edges
2. `Create React App Getting Started Guide` - 6 edges
3. `React` - 5 edges
4. `npm run eject script` - 4 edges
5. `aboutText` - 3 edges
6. `projectsData` - 3 edges
7. `Create React App` - 3 edges
8. `navItems` - 2 edges
9. `funFact` - 2 edges
10. `npm run build script` - 2 edges

## Surprising Connections (you probably didn't know these)
- `Root Mount Element (div#root)` --conceptually_related_to--> `React`  [INFERRED]
  public/index.html → README.md
- `React App HTML Template` --conceptually_related_to--> `Create React App`  [INFERRED]
  public/index.html → README.md
- `React App HTML Template` --conceptually_related_to--> `React`  [INFERRED]
  public/index.html → README.md
- `React App HTML Template` --conceptually_related_to--> `Robots Exclusion File`  [INFERRED]
  public/index.html → public/robots.txt

## Communities (13 total, 3 thin omitted)

### Community 0 - "About & Layout Shell"
Cohesion: 0.17
Nodes (3): aboutText, funFact, navItems

### Community 1 - "Public Assets & CRA Scaffold"
Cohesion: 0.17
Nodes (15): logo192.png (Apple Touch Icon), favicon.ico, manifest.json (Web App Manifest), NoScript Fallback, React App HTML Template, Root Mount Element (div#root), Tailwind CSS CDN, Create React App (+7 more)

### Community 3 - "App Entry & Routing"
Cohesion: 0.14
Nodes (6): About, Contact, Home, Project, linkElement, root

### Community 5 - "Build Tooling"
Cohesion: 0.5
Nodes (4): Babel, ESLint, npm run eject script, Webpack

## Knowledge Gaps
- **19 isolated node(s):** `Home`, `Project`, `Contact`, `About`, `linkElement` (+14 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Create React App Getting Started Guide` connect `Public Assets & CRA Scaffold` to `Build Tooling`?**
  _High betweenness centrality (0.024) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `React App HTML Template` (e.g. with `Create React App` and `React`) actually correct?**
  _`React App HTML Template` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Are the 3 inferred relationships involving `React` (e.g. with `Create React App` and `React App HTML Template`) actually correct?**
  _`React` has 3 INFERRED edges - model-reasoned connections that need verification._
- **What connects `Home`, `Project`, `Contact` to the rest of the system?**
  _19 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Home Page Sections` be split into smaller, more focused modules?**
  _Cohesion score 0.14 - nodes in this community are weakly interconnected._
- **Should `App Entry & Routing` be split into smaller, more focused modules?**
  _Cohesion score 0.14 - nodes in this community are weakly interconnected._