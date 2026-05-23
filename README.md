# 📊 SQL Server Question Bank — AdventureWorksDW

An elegant, developer-centric, ultra-fast single-page application (SPA) built to host, filter, and practice **500+ production-grade T-SQL questions** engineered explicitly for the **Microsoft AdventureWorksDW** schema. 

The application progresses systematically through 5 core training phases, scaling seamlessly from foundational projections up to dynamic administrative system optimizations, database diagnostics (DMVs), and execution engine overrides.

---

## 🚀 Live Demo & Key Features

* **Zero Dependency Core:** Engineered natively in vanilla semantic HTML5, localized CSS variables/custom utility styling, and clean asynchronous ES6+ JavaScript.
* **Instant Multiplex Filter Architecture:** Instant global search over `question`, `concept`, or specific `answers` paired with an instantaneous dynamic grid filter across three target difficulty configurations:
  * 🟢 **Beginner:** Fundamental projections, WHERE operators, arithmetic ranges, patterns matching, and baseline groupings.
  * 🟡 **Intermediate:** Composite grouping logic, HAVING filter sets, multi-table structural correlations (`INNER`/`LEFT`/`CROSS` joins), and scalar conversions.
  * 🔴 **Advanced:** Analytical window sets, recursive hierarchical compilation (CTEs), programmatic scripting architectures (`procedures`, `iTVFs`, `triggers`), dynamic T-SQL, and performance metrics profiling (`DMVs`, query plan extractions).
* **Developer Workflow Integration:** One-click clipboard syncing for raw multi-line string statements with temporary localized visual states.
* **On-Demand Hints & Solutions UI:** Isolated toggle mechanics that minimize distraction and separate conceptual guidance from the underlying target compilation code snippets.
* **JetBrains Mono Typography:** Fully optimized code block spacing layout engine for high readability across dense relational structures.

---

## 🛠️ High-Altitude Architecture Diagram




```
       +---------------------------------------------+
       |           index.html (Frontend SPA)           |
       +---------------------------------------------+
                              |
           Ingests & Parses Multi-Line Records
                              v
       +---------------------------------------------+
       |      q.js (500+ Master Question Bank)       |
       +---------------------------------------------+
                              |
   +--------------------------+--------------------------+
   |                          |                          |
   v                          v                          v

```

🟢 Phase 1 & 2              🟡 Phase 3 & 4             🔴 Phase 5

* Basic Projections        - Composite Groupings      - Window Partitions
* WHERE Filtering          - HAVING Intersections     - Recursive CTEs
* Ordering Arrays          - Relational Joins Matrix  - Programmatic T-SQL
* Range & List Checking    - Set Operations Unities   - DMV Engine Tuning


---

## 📋 Comprehensive Database Schema Matrix

Every single question is rigorously mapped directly onto the normalized relational matrices within the **AdventureWorksDW** configuration. Below is the primary target map:

| Dimensional Entities (`Dim`) | Transactional Ledger Operations (`Fact`) | Auxiliary Structural Nodes |
| :--- | :--- | :--- |
| `DimProduct` | `FactInternetSales` | `DimAccount` |
| `DimProductSubcategory` | `FactResellerSales` | `DimDepartmentGroup` |
| `DimProductCategory` | `FactProductInventory` | `DimOrganization` |
| `DimCustomer` | `FactSalesQuota` | `DimScenario` |
| `DimEmployee` | `FactCallCenter` | `DimCurrency` |
| `DimGeography` / `DimSalesTerritory` | `FactFinance` | `DimDate` |

---

## 🧬 Question Data Schema Reference

The question repository arrays embedded inside `q.js` comply precisely with the following deterministic JSON signature layout:

```json
{
  "id": 478,
  "level": "Advanced",
  "topic": "Programmatic T-SQL",
  "question": "Write an inline user-defined function named fn_GetCustomerPurchaseRecency returning the total number of elapsed days between a customer's last order date and a reference date parameter.",
  "hint": "Use DATEDIFF(DAY, MAX(OrderDateKey converted to datetime), @ReferenceDate) inside an iTVF statement pattern.",
  "concept": "Functional database abstraction workflows",
  "answer": "CREATE FUNCTION fn_GetCustomerPurchaseRecency\n  (@TargetCustomerKey INT, @ReferenceDate DATETIME)\nRETURNS TABLE\nAS\nRETURN (\n  SELECT DATEDIFF(DAY, MAX(CONVERT(DATETIME, CAST(OrderDateKey AS VARCHAR(8)), 112)), @ReferenceDate) AS DaysSinceLastPurchase\n  FROM FactInternetSales\n  WHERE CustomerKey = @TargetCustomerKey\n);"
}

```

---

## 📦 Project Structural Layout

```bash
├── Question.js         # The 500+ production-grade SQL question database array
├── index.html     # The Vanilla JavaScript UI Engine, style matrix, and responsive template layout
└── README.md    # System infrastructure documentation

```

---

## ⚙️ Direct Local Installation & Upkeep

Because this platform is fully self-contained, deployment requires no compilation pipelines, server configurations, or package manager operations.

### 1. Direct Execution

Clone the tracking files to your local partition workspace filesystem and execute the browser index point:

```bash
git clone [https://github.com/yourusername/sql-question-bank.git](https://github.com/yourusername/sql-question-bank.git)
cd sql-question-bank

```

Open `index.html` straight inside your target high-speed browser environment (Chrome, Firefox, Edge, Safari, Brave).

### 2. Updating the Question Matrix Data

To scale or update query items fields configurations safely, edit the parent tracking array inside `Question.js`:

```javascript
// Append your new record inside the questions array:
questions.push({
  id: 551,
  level: "Advanced",
  topic: "Query Optimization",
  question: "Your custom database performance analysis task narrative here...",
  hint: "Target parameters filtering metrics advice...",
  concept: "Core database execution index tuning...",
  answer: "SELECT * FROM YourNormalizedTargetTable;"
});

```

---

## 🎨 UI Performance Tiers & Custom Variables

The design layer is built on ultra-dark UI components with custom CSS variables, facilitating rapid skinning alterations straight within the embedded `<style>` block:

```css
:root {
  --bg: #0f0f13;          /* Deep base application background anchor */
  --surface: #17171e;     /* Component container card canvas */
  --accent: #6c63ff;      /* System focal brand layout tint color */
  --green: #3dd68c;       /* Beginner / Succesful verification validation state */
  --amber: #f59e0b;       /* Intermediate categorization metric */
}

```

---

## 📜 Educational License Blueprint

Distributed under the **MIT License**. Check out the localized source repositories constraints files definitions arrays for deeper legal documentation.

---

### 💡 Engineering Contribution Notice

When expanding the underlying T-SQL collection layers arrays, safeguard database engine syntax paradigms by ensuring all multiline keywords (`SELECT`, `FROM`, `INNER JOIN`, `GROUP BY`, `HAVING`, `OVER`) match clear line break structures (`\n`) within string parameters configurations definitions models to protect high-density code presentation layouts.


