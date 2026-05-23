const questions = [
{
    id: 1,
    level: "Beginner",
    topic: "SELECT & FROM",
    question: "Retrieve all rows and columns from the DimOrganization table.",
    hint: "Use SELECT * to query the entire table structure.",
    concept: "Basic SELECT",
    answer: "SELECT *\nFROM DimOrganization;"
  },
  {
    id: 2,
    level: "Beginner",
    topic: "SELECT & FROM",
    question: "Select only the OrganizationKey, OrganizationName, and PercentageOfOwnership columns from DimOrganization.",
    hint: "Project explicit column names separated by commas.",
    concept: "Column Projection",
    answer: "SELECT OrganizationKey, OrganizationName, PercentageOfOwnership\nFROM DimOrganization;"
  },
  {
    id: 3,
    level: "Beginner",
    topic: "SELECT & FROM",
    question: "Retrieve all columns from DimCurrency to examine its structural attributes.",
    hint: "Use SELECT * on the targeted data warehouse dimension.",
    concept: "Basic SELECT",
    answer: "SELECT *\nFROM DimCurrency;"
  },
  {
    id: 4,
    level: "Beginner",
    topic: "SELECT & FROM",
    question: "Extract CurrencyKey and CurrencyName columns from DimCurrency to produce a minimal reference checklist.",
    hint: "Explicitly name the two required key and attribute columns.",
    concept: "Column Projection",
    answer: "SELECT CurrencyKey, CurrencyName\nFROM DimCurrency;"
  },
  {
    id: 5,
    level: "Beginner",
    topic: "SELECT & FROM",
    question: "Query every field from DimSalesTerritory to view metadata for geographical regions.",
    hint: "Standard asterisk projection from the sales territory lookup table.",
    concept: "Basic SELECT",
    answer: "SELECT *\nFROM DimSalesTerritory;"
  },
  {
    id: 6,
    level: "Beginner",
    topic: "SELECT & FROM",
    question: "Isolate SalesTerritoryKey, SalesTerritoryRegion, and SalesTerritoryCountry from the DimSalesTerritory dimension table.",
    hint: "Omit the alternate keys and image data columns; list only requested elements.",
    concept: "Column Projection",
    answer: "SELECT SalesTerritoryKey, SalesTerritoryRegion, SalesTerritoryCountry\nFROM DimSalesTerritory;"
  },
  {
    id: 7,
    level: "Beginner",
    topic: "SELECT & FROM",
    question: "Retrieve all transactional details from the DimScenario table to identify operational tracking baselines.",
    hint: "Execute a structural dump of the baseline scenario configuration table.",
    concept: "Basic SELECT",
    answer: "SELECT *\nFROM DimScenario;"
  },
  {
    id: 8,
    level: "Beginner",
    topic: "SELECT & FROM",
    question: "Project ScenarioKey and ScenarioName fields from DimScenario.",
    hint: "Specify names carefully without spelling mistakes.",
    concept: "Column Projection",
    answer: "SELECT ScenarioKey, ScenarioName\nFROM DimScenario;"
  },
  {
    id: 9,
    level: "Beginner",
    topic: "SELECT & FROM",
    question: "Extract all available information from the DimDepartmentGroup table.",
    hint: "Standard SELECT against DimDepartmentGroup.",
    concept: "Basic SELECT",
    answer: "SELECT *\nFROM DimDepartmentGroup;"
  },
  {
    id: 10,
    level: "Beginner",
    topic: "SELECT & FROM",
    question: "Select DepartmentGroupKey and DepartmentGroupName from the DimDepartmentGroup dimension.",
    hint: "Project structural keys and textual definitions.",
    concept: "Column Projection",
    answer: "SELECT DepartmentGroupKey, DepartmentGroupName\nFROM DimDepartmentGroup;"
  },
  {
    id: 11,
    level: "Beginner",
    topic: "SELECT & FROM",
    question: "Query every column from the DimProductCategory metadata entity table.",
    hint: "Target the system product category table.",
    concept: "Basic SELECT",
    answer: "SELECT *\nFROM DimProductCategory;"
  },
  {
    id: 12,
    level: "Beginner",
    topic: "SELECT & FROM",
    question: "Retrieve ProductCategoryKey and EnglishProductCategoryName from DimProductCategory.",
    hint: "Isolate local language translation attributes.",
    concept: "Column Projection",
    answer: "SELECT ProductCategoryKey, EnglishProductCategoryName\nFROM DimProductCategory;"
  },
  {
    id: 13,
    level: "Beginner",
    topic: "SELECT & FROM",
    question: "Select all data points out of the DimProductSubcategory dimensional structural mapping block.",
    hint: "Run a blanket query against DimProductSubcategory.",
    concept: "Basic SELECT",
    answer: "SELECT *\nFROM DimProductSubcategory;"
  },
  {
    id: 14,
    level: "Beginner",
    topic: "SELECT & FROM",
    question: "Project ProductSubcategoryKey, ProductCategoryKey, and EnglishProductSubcategoryName from DimProductSubcategory.",
    hint: "Extract foreign and primary key structural hooks.",
    concept: "Column Projection",
    answer: "SELECT ProductSubcategoryKey, ProductCategoryKey, EnglishProductSubcategoryName\nFROM DimProductSubcategory;"
  },
  {
    id: 15,
    level: "Beginner",
    topic: "SELECT & FROM",
    question: "Extract all details from DimPromotion to map historical marketing initiative IDs.",
    hint: "Target the core promotion tracking table.",
    concept: "Basic SELECT",
    answer: "SELECT *\nFROM DimPromotion;"
  },
  {
    id: 16,
    level: "Beginner",
    topic: "SELECT & FROM",
    question: "Isolate PromotionKey, EnglishPromotionName, and DiscountPct from the promotion catalog table.",
    hint: "Target specific percentage metrics and names.",
    concept: "Column Projection",
    answer: "SELECT PromotionKey, EnglishPromotionName, DiscountPct\nFROM DimPromotion;"
  },
  {
    id: 17,
    level: "Beginner",
    topic: "SELECT & FROM",
    question: "Select all columns out of the core transactional FactAdditionalInternationalProductDescription logging container.",
    hint: "Query the descriptive internationalization fact store directly.",
    concept: "Basic SELECT",
    answer: "SELECT *\nFROM FactAdditionalInternationalProductDescription;"
  },
  {
    id: 18,
    level: "Beginner",
    topic: "SELECT & FROM",
    question: "Project ProductKey, CultureName, and ProductDescription from FactAdditionalInternationalProductDescription.",
    hint: "Isolate the core localization vectors explicitly.",
    concept: "Column Projection",
    answer: "SELECT ProductKey, CultureName, ProductDescription\nFROM FactAdditionalInternationalProductDescription;"
  },
  {
    id: 19,
    level: "Beginner",
    topic: "SELECT & FROM",
    question: "Pull all records from the DimGeography metadata lookup boundary.",
    hint: "Query the primary geographic tracking array.",
    concept: "Basic SELECT",
    answer: "SELECT *\nFROM DimGeography;"
  },
  {
    id: 20,
    level: "Beginner",
    topic: "SELECT & FROM",
    question: "Select GeographyKey, City, StateProvinceName, and CountryRegionName from DimGeography.",
    hint: "Compile explicit regional contextual properties.",
    concept: "Column Projection",
    answer: "SELECT GeographyKey, City, StateProvinceName, CountryRegionName\nFROM DimGeography;"
  },

  // WHERE Clause Filtering (21 - 50)
  {
    id: 21,
    level: "Beginner",
    topic: "WHERE",
    question: "Find all rows in DimGeography where the CountryRegionName is exactly 'United States'.",
    hint: "Implement character literal matching inside a standard WHERE context.",
    concept: "String Literal Filtering",
    answer: "SELECT *\nFROM DimGeography\nWHERE CountryRegionName = 'United States';"
  },
  {
    id: 22,
    level: "Beginner",
    topic: "WHERE",
    question: "Filter the DimGeography table to list locations within the StateProvinceName of 'California'.",
    hint: "Isolate entities bound to a singular state string literal query.",
    concept: "String Literal Filtering",
    answer: "SELECT *\nFROM DimGeography\nWHERE StateProvinceName = 'California';"
  },
  {
    id: 23,
    level: "Beginner",
    topic: "WHERE",
    question: "Retrieve entries from DimGeography where the PostalCode matches '98052' exactly.",
    hint: "Match character strings containing alphanumeric numbers explicitly.",
    concept: "String Literal Filtering",
    answer: "SELECT *\nFROM DimGeography\nWHERE PostalCode = '98052';"
  },
  {
    id: 24,
    level: "Beginner",
    topic: "WHERE",
    question: "Extract rows from DimProduct where the SafetyStockLevel is exactly 500 units.",
    hint: "Compare numeric datatypes without applying character quotation encapsulation.",
    concept: "Numeric Precision Filtering",
    answer: "SELECT *\nFROM DimProduct\nWHERE SafetyStockLevel = 500;"
  },
  {
    id: 25,
    level: "Beginner",
    topic: "WHERE",
    question: "Identify products in DimProduct that maintain a ReorderPoint exactly equal to 375.",
    hint: "Apply numerical equality check syntax mechanics.",
    concept: "Numeric Precision Filtering",
    answer: "SELECT *\nFROM DimProduct\nWHERE ReorderPoint = 375;"
  },
  {
    id: 26,
    level: "Beginner",
    topic: "WHERE",
    question: "Find items in DimProduct configured with a status flag matching 'Current'.",
    hint: "Filter active tracking values using standard text equality metrics.",
    concept: "String Literal Filtering",
    answer: "SELECT *\nFROM DimProduct\nWHERE Status = 'Current';"
  },
  {
    id: 27,
    level: "Beginner",
    topic: "WHERE",
    question: "Query DimProduct for rows where SizeRange contains the value literal '42-46'.",
    hint: "Leverage standard literal equivalence rules on compound text keys.",
    concept: "String Literal Filtering",
    answer: "SELECT *\nFROM DimProduct\nWHERE SizeRange = '42-46';"
  },
  {
    id: 28,
    level: "Beginner",
    topic: "WHERE",
    question: "Identify employees within DimEmployee who report directly to ParentEmployeeKey number 7.",
    hint: "Filter parent key pointers using basic integer criteria equations.",
    concept: "Numeric Precision Filtering",
    answer: "SELECT *\nFROM DimEmployee\nWHERE ParentEmployeeKey = 7;"
  },
  {
    id: 29,
    level: "Beginner",
    topic: "WHERE",
    question: "Isolate employees inside DimEmployee whose MaritalStatus text token evaluates to 'M'.",
    hint: "Match standard lookup character codes via explicit where assignments.",
    concept: "String Literal Filtering",
    answer: "SELECT *\nFROM DimEmployee\nWHERE MaritalStatus = 'M';"
  },
  {
    id: 30,
    level: "Beginner",
    topic: "WHERE",
    question: "List personnel inside DimEmployee whose Gender registration value is equal to 'F'.",
    hint: "Filter columns matching single-character metadata flags.",
    concept: "String Literal Filtering",
    answer: "SELECT *\nFROM DimEmployee\nWHERE Gender = 'F';"
  },
  {
    id: 31,
    level: "Beginner",
    topic: "WHERE",
    question: "Extract records from DimEmployee where SalariedFlag equals 1.",
    hint: "Boolean states are typically checked using 1 or 0 integers in data warehouses.",
    concept: "Numeric Precision Filtering",
    answer: "SELECT *\nFROM DimEmployee\nWHERE SalariedFlag = 1;"
  },
  {
    id: 32,
    level: "Beginner",
    topic: "WHERE",
    question: "Filter DimEmployee to find tracking nodes where VacationHours are precisely equal to 40.",
    hint: "Isolate matching structural counts by integer properties.",
    concept: "Numeric Precision Filtering",
    answer: "SELECT *\nFROM DimEmployee\nWHERE VacationHours = 40;"
  },
  {
    id: 33,
    level: "Beginner",
    topic: "WHERE",
    question: "Find rows inside DimEmployee where SickLeaveHours evaluate exactly to 20.",
    hint: "Apply numerical equality logic parameters directly.",
    concept: "Numeric Precision Filtering",
    answer: "SELECT *\nFROM DimEmployee\nWHERE SickLeaveHours = 20;"
  },
  {
    id: 34,
    level: "Beginner",
    topic: "WHERE",
    question: "Identify customer records inside DimCustomer whose HouseOwnerFlag string evaluates to '1'.",
    hint: "Check indicator metrics formatted as specialized characters.",
    concept: "String Literal Filtering",
    answer: "SELECT *\nFROM DimCustomer\nWHERE HouseOwnerFlag = '1';"
  },
  {
    id: 35,
    level: "Beginner",
    topic: "WHERE",
    question: "Query DimCustomer to find records with NumberCarsOwned registering exactly as 2.",
    hint: "Filter for intermediate scalar counts against numerical baselines.",
    concept: "Numeric Precision Filtering",
    answer: "SELECT *\nFROM DimCustomer\nWHERE NumberCarsOwned = 2;"
  },
  {
    id: 36,
    level: "Beginner",
    topic: "WHERE",
    question: "Select rows from DimCustomer where CommuteDistance is tracked explicitly as '1-2 Miles'.",
    hint: "Match exactly against structured categorical distance descriptors.",
    concept: "String Literal Filtering",
    answer: "SELECT *\nFROM DimCustomer\nWHERE CommuteDistance = '1-2 Miles';"
  },
  {
    id: 37,
    level: "Beginner",
    topic: "WHERE",
    question: "Filter Reseller records in DimReseller where the YearOpened baseline evaluates to 1990.",
    hint: "Query specific historic metrics through basic integer equations.",
    concept: "Numeric Precision Filtering",
    answer: "SELECT *\nFROM DimReseller\nWHERE YearOpened = 1990;"
  },
  {
    id: 38,
    level: "Beginner",
    topic: "WHERE",
    question: "Find entries inside DimReseller categorized under the OrderFrequency parameter classification of 'Quarterly'.",
    hint: "Match against core business tracking text descriptors.",
    concept: "String Literal Filtering",
    answer: "SELECT *\nFROM DimReseller\nWHERE OrderFrequency = 'Quarterly';"
  },
  {
    id: 39,
    level: "Beginner",
    topic: "WHERE",
    question: "Query FactInternetSales tracking rows containing a PromotionKey value pointing directly to 1.",
    hint: "Isolate unpromoted or standardized order transactions by internal ID references.",
    concept: "Numeric Precision Filtering",
    answer: "SELECT *\nFROM FactInternetSales\nWHERE PromotionKey = 1;"
  },
  {
    id: 40,
    level: "Beginner",
    topic: "WHERE",
    question: "Extract entries from FactInternetSales where the CurrencyKey maps precisely to 100.",
    hint: "Filter specific dimensional foreign indicators via clear integer mappings.",
    concept: "Numeric Precision Filtering",
    answer: "SELECT *\nFROM FactInternetSales\nWHERE CurrencyKey = 100;"
  },
  {
    id: 41,
    level: "Beginner",
    topic: "WHERE",
    question: "Find sales records from FactInternetSales with a SalesOrderNumber explicitly matching 'SO43697'.",
    hint: "Encase target order strings in traditional single quotes.",
    concept: "String Literal Filtering",
    answer: "SELECT *\nFROM FactInternetSales\nWHERE SalesOrderNumber = 'SO43697';"
  },
  {
    id: 42,
    level: "Beginner",
    topic: "WHERE",
    question: "Isolate records within FactInternetSales where the total OrderQuantity measures exactly 1.",
    hint: "Identify basic singular purchasing logs directly using mathematical metrics.",
    concept: "Numeric Precision Filtering",
    answer: "SELECT *\nFROM FactInternetSales\nWHERE OrderQuantity = 1;"
  },
  {
    id: 43,
    level: "Beginner",
    topic: "WHERE",
    question: "Select rows from FactResellerSales whose internal SalesTerritoryKey corresponds strictly to 1.",
    hint: "Filter regional sales operations records with standard transactional constraints.",
    concept: "Numeric Precision Filtering",
    answer: "SELECT *\nFROM FactResellerSales\nWHERE SalesTerritoryKey = 1;"
  },
  {
    id: 44,
    level: "Beginner",
    topic: "WHERE",
    question: "Query FactResellerSales for entries containing a RevisionNumber matching 1.",
    hint: "Query transactional document states via basic validation keys.",
    concept: "Numeric Precision Filtering",
    answer: "SELECT *\nFROM FactResellerSales\nWHERE RevisionNumber = 1;"
  },
  {
    id: 45,
    level: "Beginner",
    topic: "WHERE",
    question: "Filter FactResellerSales to return line items reporting an OrderQuantity value matching 12.",
    hint: "Match integer parameters directly inside your evaluation pipeline.",
    concept: "Numeric Precision Filtering",
    answer: "SELECT *\nFROM FactResellerSales\nWHERE OrderQuantity = 12;"
  },
  {
    id: 46,
    level: "Beginner",
    topic: "WHERE",
    question: "Find data records inside FactSalesQuota tracking explicit EmployeeKey associations equal to 272.",
    hint: "Isolate human capital metric logs by structural integer indexing parameters.",
    concept: "Numeric Precision Filtering",
    answer: "SELECT *\nFROM FactSalesQuota\nWHERE EmployeeKey = 272;"
  },
  {
    id: 47,
    level: "Beginner",
    topic: "WHERE",
    question: "Select metrics out of FactSalesQuota specifying a CalendarYear of 2012.",
    hint: "Isolate specific chronological metrics directly from the tracking tables.",
    concept: "Numeric Precision Filtering",
    answer: "SELECT *\nFROM FactSalesQuota\nWHERE CalendarYear = 2012;"
  },
  {
    id: 48,
    level: "Beginner",
    topic: "WHERE",
    question: "Identify entries within FactSalesQuota where the core SalesAmountQuota maps precisely to 150000.",
    hint: "Match large financial tracking parameters without utilizing decimal definitions or symbols.",
    concept: "Numeric Precision Filtering",
    answer: "SELECT *\nFROM FactSalesQuota\nWHERE SalesAmountQuota = 150000;"
  },
  {
    id: 49,
    level: "Beginner",
    topic: "WHERE",
    question: "Retrieve rows from FactProductInventory tracking allocations across StateProvinceName fields mapping to '6'.",
    hint: "Query structural parameters verifying text representation formatting models.",
    concept: "String Literal Filtering",
    answer: "SELECT *\nFROM FactProductInventory\nWHERE Shelf = '6';"
  },
  {
    id: 50,
    level: "Beginner",
    topic: "WHERE",
    question: "Find historical entry targets inside FactProductInventory displaying a Bin property constraint value of 1.",
    hint: "Filter structured warehouse coordinates utilizing physical storage references.",
    concept: "Numeric Precision Filtering",
    answer: "SELECT *\nFROM FactProductInventory\nWHERE Bin = 1;"
  },

  // ORDER BY Sorting (51 - 75)
  {
    id: 51,
    level: "Beginner",
    topic: "ORDER BY",
    question: "List all items inside DimProduct sorted systematically by EnglishProductName in ascending alphabetical structure.",
    hint: "Append ORDER BY along with the structural target attribute default ASC settings.",
    concept: "Ascending Alpha Sorting",
    answer: "SELECT *\nFROM DimProduct\nORDER BY EnglishProductName ASC;"
  },
  {
    id: 52,
    level: "Beginner",
    topic: "ORDER BY",
    question: "Sort DimProduct entries descending based upon their base numerical ListPrice configuration tracking.",
    hint: "Incorporate the DESC operational keyword modifier into the sort definitions.",
    concept: "Descending Numeric Sorting",
    answer: "SELECT *\nFROM DimProduct\nORDER BY ListPrice DESC;"
  },
  {
    id: 53,
    level: "Beginner",
    topic: "ORDER BY",
    question: "Query all records from DimEmployee ordering results by HireDate from the oldest tracking node down to newest additions.",
    hint: "Sort sequentially via standard ASC chronological mechanics.",
    concept: "Chronological Progression Sorting",
    answer: "SELECT *\nFROM DimEmployee\nORDER BY HireDate ASC;"
  },
  {
    id: 54,
    level: "Beginner",
    topic: "ORDER BY",
    question: "Retrieve personnel logs from DimEmployee ordering entries down by BirthDate from youngest to oldest.",
    hint: "Youngest tracking parameters match newer dates, necessitating DESC sequencing structures.",
    concept: "Reverse Chronological Sorting",
    answer: "SELECT *\nFROM DimEmployee\nORDER BY BirthDate DESC;"
  },
  {
    id: 55,
    level: "Beginner",
    topic: "ORDER BY",
    question: "Extract all entries from DimCustomer sorting data points primarily by LastName (ASC) and secondarily by FirstName (ASC).",
    hint: "Provide an explicitly defined, comma-delimited multi-column priority sort signature.",
    concept: "Compound Multi-Column Sorting",
    answer: "SELECT *\nFROM DimCustomer\nORDER BY LastName ASC, FirstName ASC;"
  },
  {
    id: 56,
    level: "Beginner",
    topic: "ORDER BY",
    question: "Query DimCustomer record tracks descending via YearlyIncome metrics.",
    hint: "Apply numerical column configurations modifying standard directional vectors down using DESC.",
    concept: "Descending Numeric Sorting",
    answer: "SELECT *\nFROM DimCustomer\nORDER BY YearlyIncome DESC;"
  },
  {
    id: 57,
    level: "Beginner",
    topic: "ORDER BY",
    question: "Order DimReseller records ascending based upon the corporate AnnualSales estimates recorded against them.",
    hint: "Execute ascending validation processing over raw decimal types.",
    concept: "Ascending Numeric Sorting",
    answer: "SELECT *\nFROM DimReseller\nORDER BY AnnualSales ASC;"
  },
  {
    id: 58,
    level: "Beginner",
    topic: "ORDER BY",
    question: "Extract reseller metadata tracking entries ordered by NumberEmployees structural counts descending.",
    hint: "Sort specific density parameters via clear DESC modifiers.",
    concept: "Descending Numeric Sorting",
    answer: "SELECT *\nFROM DimReseller\nORDER BY NumberEmployees DESC;"
  },
  {
    id: 59,
    level: "Beginner",
    topic: "ORDER BY",
    question: "Sort FactInternetSales entries by SalesAmount metrics descending to surface high-value interactions cleanly.",
    hint: "Target specific transactional measure scales for high-to-low presentation models.",
    concept: "Descending Numeric Sorting",
    answer: "SELECT *\nFROM FactInternetSales\nORDER BY SalesAmount DESC;"
  },
  {
    id: 60,
    level: "Beginner",
    topic: "ORDER BY",
    question: "Sequence FactInternetSales tracking values ascending via the transactional OrderDateKey framework hook.",
    hint: "Chronologically sequence numerical logging configurations via normal ordering assignments.",
    concept: "Ascending Numeric Sorting",
    answer: "SELECT *\nFROM FactInternetSales\nORDER BY OrderDateKey ASC;"
  },
  {
    id: 61,
    level: "Beginner",
    topic: "ORDER BY",
    question: "Sort FactResellerSales entries using TotalProductCost metrics descending.",
    hint: "Apply descending sequence directives directly to financial cost paths.",
    concept: "Descending Numeric Sorting",
    answer: "SELECT *\nFROM FactResellerSales\nORDER BY TotalProductCost DESC;"
  },
  {
    id: 62,
    level: "Beginner",
    topic: "ORDER BY",
    question: "Order records in FactResellerSales descending by tax computational attributes via TaxAmt.",
    hint: "Apply traditional financial ranking directives over explicit calculated indicators.",
    concept: "Descending Numeric Sorting",
    answer: "SELECT *\nFROM FactResellerSales\nORDER BY TaxAmt DESC;"
  },
  {
    id: 63,
    level: "Beginner",
    topic: "ORDER BY",
    question: "Retrieve DimPromotion parameters ordered descending by the formal DiscountPct metric tracking array.",
    hint: "Sequence promotional values by percentage weights from highest index downward.",
    concept: "Descending Numeric Sorting",
    answer: "SELECT *\nFROM DimPromotion\nORDER BY DiscountPct DESC;"
  },
  {
    id: 64,
    level: "Beginner",
    topic: "ORDER BY",
    question: "Sequence promotional rows within DimPromotion chronological trackers utilizing StartDate metrics ascending.",
    hint: "Apply basic historical timeline progressions into your sort statement expressions.",
    concept: "Chronological Progression Sorting",
    answer: "SELECT *\nFROM DimPromotion\nORDER BY StartDate ASC;"
  },
  {
    id: 65,
    level: "Beginner",
    topic: "ORDER BY",
    question: "Query FactSalesQuota distributions ordering results by EmployeeKey (ASC) and tracking patterns by SalesAmountQuota (DESC).",
    hint: "Vary direction vectors on each individual specified target parameters inside your order declarations.",
    concept: "Compound Multi-Column Sorting",
    answer: "SELECT *\nFROM FactSalesQuota\nORDER BY EmployeeKey ASC, SalesAmountQuota DESC;"
  },
  {
    id: 66,
    level: "Beginner",
    topic: "ORDER BY",
    question: "Sort FactProductInventory lines according to internal UnitCost metrics tracking models descending.",
    hint: "Organize unit metric financial properties via straightforward structural ordering paths.",
    concept: "Descending Numeric Sorting",
    answer: "SELECT *\nFROM FactProductInventory\nORDER BY UnitCost DESC;"
  },
  {
    id: 67,
    level: "Beginner",
    topic: "ORDER BY",
    question: "Organize FactProductInventory results by UnitsBalance patterns ascending.",
    hint: "Sequence tracking rows based upon active transactional product density maps.",
    concept: "Ascending Numeric Sorting",
    answer: "SELECT *\nFROM FactProductInventory\nORDER BY UnitsBalance ASC;"
  },
  {
    id: 68,
    level: "Beginner",
    topic: "ORDER BY",
    question: "Query DimSalesTerritory records sorted alphabetically ascending by the tracked SalesTerritoryGroup definitions.",
    hint: "Organize macro-regional groupings cleanly with alphabetic order metrics.",
    concept: "Ascending Alpha Sorting",
    answer: "SELECT *\nFROM DimSalesTerritory\nORDER BY SalesTerritoryGroup ASC;"
  },
  {
    id: 69,
    level: "Beginner",
    topic: "ORDER BY",
    question: "Order DimGeography data rows logically via StateProvinceCode structures descending.",
    hint: "Sort regional geographic properties by structural characters descending.",
    concept: "Descending Alpha Sorting",
    answer: "SELECT *\nFROM DimGeography\nORDER BY StateProvinceCode DESC;"
  },
  {
    id: 70,
    level: "Beginner",
    topic: "ORDER BY",
    question: "Isolate DimCurrency rows sorted cleanly alphabetically ascending by the formal CurrencyAlternateKey system definition.",
    hint: "Order short alphabetic transaction handles cleanly.",
    concept: "Ascending Alpha Sorting",
    answer: "SELECT *\nFROM DimCurrency\nORDER BY CurrencyAlternateKey ASC;"
  },
  {
    id: 71,
    level: "Beginner",
    topic: "ORDER BY",
    question: "Extract rows from FactCallCenter ordered sequentially ascending by DateKey parameters.",
    hint: "Sequence tracking arrays using chronological key integers.",
    concept: "Ascending Numeric Sorting",
    answer: "SELECT *\nFROM FactCallCenter\nORDER BY DateKey ASC;"
  },
  {
    id: 72,
    level: "Beginner",
    topic: "ORDER BY",
    question: "Sort operational records inside FactCallCenter descending via the tracked Calls volume scale metric column.",
    hint: "Surface volume-heavy interaction windows by explicit field ranking methods.",
    concept: "Descending Numeric Sorting",
    answer: "SELECT *\nFROM FactCallCenter\nORDER BY Calls DESC;"
  },
  {
    id: 73,
    level: "Beginner",
    topic: "ORDER BY",
    question: "Organize FactCallCenter rows based upon the total LevelTwoOperators assignment volume values descending.",
    hint: "Sort human resource operational distribution columns via clear DESC qualifiers.",
    concept: "Descending Numeric Sorting",
    answer: "SELECT *\nFROM FactCallCenter\nORDER BY LevelTwoOperators DESC;"
  },
  {
    id: 74,
    level: "Beginner",
    topic: "ORDER BY",
    question: "Order tracking records in FactCallCenter descending by the ServiceLevel optimization scalar metric indicators.",
    hint: "Determine quality tracking parameters performance scales by applying simple variable ranking methods.",
    concept: "Descending Numeric Sorting",
    answer: "SELECT *\nFROM FactCallCenter\nORDER BY ServiceLevel DESC;"
  },
  {
    id: 75,
    level: "Beginner",
    topic: "ORDER BY",
    question: "Sort FactFinance metrics structurally using the OrganizationKey indicator flags ascending.",
    hint: "Align internal dimensional ledger accounts by their natural identifier values.",
    concept: "Ascending Numeric Sorting",
    answer: "SELECT *\nFROM FactFinance\nORDER BY OrganizationKey ASC;"
  },

  // TOP / FETCH Rows Restrictions (76 - 100)
  {
    id: 76,
    level: "Beginner",
    topic: "TOP / FETCH",
    question: "Select exactly the top 5 records from DimProduct using an explicit SELECT TOP statement strategy.",
    hint: "Incorporate TOP(5) straight into your root selection expression profile.",
    concept: "TOP Cardinality Restriction",
    answer: "SELECT TOP(5) *\nFROM DimProduct;"
  },
  {
    id: 77,
    level: "Beginner",
    topic: "TOP / FETCH",
    question: "Return the top 10 rows from DimCustomer explicitly to test query response performance parameters.",
    hint: "Apply standard TOP filters to restrict structural scanning thresholds.",
    concept: "TOP Cardinality Restriction",
    answer: "SELECT TOP(10) *\nFROM DimCustomer;"
  },
  {
    id: 78,
    level: "Beginner",
    topic: "TOP / FETCH",
    question: "Query the top 3 most expensive products recorded inside DimProduct based upon ListPrice tracking indicators.",
    hint: "Combine a TOP filter constraint with an explicit descending order structural sort path.",
    concept: "Ordered Cardinality Limit",
    answer: "SELECT TOP(3) ProductKey, EnglishProductName, ListPrice\nFROM DimProduct\nORDER BY ListPrice DESC;"
  },
  {
    id: 79,
    level: "Beginner",
    topic: "TOP / FETCH",
    question: "Isolate the top 5 highest earners from DimCustomer utilizing YearlyIncome sorting vectors.",
    hint: "Construct a TOP statement filtering highest metric boundaries through descending arrays.",
    concept: "Ordered Cardinality Limit",
    answer: "SELECT TOP(5) CustomerKey, FirstName, LastName, YearlyIncome\nFROM DimCustomer\nORDER BY YearlyIncome DESC;"
  },
  {
    id: 80,
    level: "Beginner",
    topic: "TOP / FETCH",
    question: "Extract the single most recent promotion tracked inside DimPromotion based upon the StartDate field configuration.",
    hint: "Leverage TOP(1) aligned directly against descending historical context vectors.",
    concept: "Extreme Value Isolation",
    answer: "SELECT TOP(1) PromotionKey, EnglishPromotionName, StartDate\nFROM DimPromotion\nORDER BY StartDate DESC;"
  },
  {
    id: 81,
    level: "Beginner",
    topic: "TOP / FETCH",
    question: "Identify the top 20 oldest employees via BirthDate ordering vectors mapped inside DimEmployee.",
    hint: "Query TOP(20) matching early birth timelines via clean ascending chronology fields.",
    concept: "Ordered Cardinality Limit",
    answer: "SELECT TOP(20) EmployeeKey, FirstName, LastName, BirthDate\nFROM DimEmployee\nORDER BY BirthDate ASC;"
  },
  {
    id: 82,
    level: "Beginner",
    topic: "TOP / FETCH",
    question: "Isolate the top 5 highest transactional records by SalesAmount inside FactInternetSales tracking tables.",
    hint: "Extract rows using TOP linked with high financial metrics ordered descending.",
    concept: "Ordered Cardinality Limit",
    answer: "SELECT TOP(5) SalesOrderNumber, CustomerKey, SalesAmount\nFROM FactInternetSales\nORDER BY SalesAmount DESC;"
  },
  {
    id: 83,
    level: "Beginner",
    topic: "TOP / FETCH",
    question: "Find the top 10 largest order transactions by OrderQuantity tracked in FactResellerSales.",
    hint: "Filter top items by ordering quantity values descending cleanly.",
    concept: "Ordered Cardinality Limit",
    answer: "SELECT TOP(10) SalesOrderNumber, ProductKey, OrderQuantity\nFROM FactResellerSales\nORDER BY OrderQuantity DESC;"
  },
  {
    id: 84,
    level: "Beginner",
    topic: "TOP / FETCH",
    question: "Extract the top 15 oldest records from FactProductInventory utilizing the OrderDateKey values ascending.",
    hint: "Extract top records sequencing early snapshot timestamps via standard ascending configurations.",
    concept: "Ordered Cardinality Limit",
    answer: "SELECT TOP(15) ProductKey, DateKey, UnitsBalance\nFROM FactProductInventory\nORDER BY DateKey ASC;"
  },
  {
    id: 85,
    level: "Beginner",
    topic: "TOP / FETCH",
    question: "Isolate the top 3 call log records with the highest tracking metrics on AbandonedCalls in FactCallCenter.",
    hint: "Sort call data indicators tracking high error volumes descending with a cardinal filter.",
    concept: "Ordered Cardinality Limit",
    answer: "SELECT TOP(3) DateKey, WageType, AbandonedCalls\nFROM FactCallCenter\nORDER BY AbandonedCalls DESC;"
  },
  {
    id: 86,
    level: "Beginner",
    topic: "TOP / FETCH",
    question: "Retrieve the top 5 highest monetary distributions from FactFinance using the Amount column descending.",
    hint: "Filter topmost entry scales applying financial values sorting metrics descending.",
    concept: "Ordered Cardinality Limit",
    answer: "SELECT TOP(5) FinanceKey, AccountKey, Amount\nFROM FactFinance\nORDER BY Amount DESC;"
  },
  {
    id: 87,
    level: "Beginner",
    topic: "TOP / FETCH",
    question: "Pull the top 10 records from DimReseller tracking highest numbers under the NumberEmployees structural metrics descriptor.",
    hint: "Filter top counts using density metrics sorted descending.",
    concept: "Ordered Cardinality Limit",
    answer: "SELECT TOP(10) ResellerKey, ResellerName, NumberEmployees\nFROM DimReseller\nORDER BY NumberEmployees DESC;"
  },
  {
    id: 88,
    level: "Beginner",
    topic: "TOP / FETCH",
    question: "Isolate the top 5 earliest opened entities in DimReseller using YearOpened metric flags ascending.",
    hint: "Combine a TOP constraint filter with integer chronological paths sorted ascending.",
    concept: "Ordered Cardinality Limit",
    answer: "SELECT TOP(5) ResellerKey, ResellerName, YearOpened\nFROM DimReseller\nORDER BY YearOpened ASC;"
  },
  {
    id: 89,
    level: "Beginner",
    topic: "TOP / FETCH",
    question: "Return the top 1 single entry showing highest TaxAmt tracked in FactInternetSales records.",
    hint: "Isolate structural maximum calculations via explicit TOP(1) descending sorting profiles.",
    concept: "Extreme Value Isolation",
    answer: "SELECT TOP(1) SalesOrderNumber, TaxAmt\nFROM FactInternetSales\nORDER BY TaxAmt DESC;"
  },
  {
    id: 90,
    level: "Beginner",
    topic: "TOP / FETCH",
    question: "Find the top 5 items within DimProduct containing the highest recorded Weight profile matrix components.",
    hint: "Sort physical mass dimensions descending filtering topmost values.",
    concept: "Ordered Cardinality Limit",
    answer: "SELECT TOP(5) ProductKey, EnglishProductName, Weight\nFROM DimProduct\nORDER BY Weight DESC;"
  },
  {
    id: 91,
    level: "Beginner",
    topic: "TOP / FETCH",
    question: "Extract the top 10 customers within DimCustomer displaying highest total values in NumberCarsOwned descending.",
    hint: "Isolate top scalar categories tracking volumes using clear descending instructions.",
    concept: "Ordered Cardinality Limit",
    answer: "SELECT TOP(10) CustomerKey, LastName, NumberCarsOwned\nFROM DimCustomer\nORDER BY NumberCarsOwned DESC;"
  },
  {
    id: 92,
    level: "Beginner",
    topic: "TOP / FETCH",
    question: "Retrieve the top 5 rows from DimGeography tracking the lowest numeric GeographyKey values explicitly.",
    hint: "Apply basic ascending integer tracking directly into a TOP extraction expression.",
    concept: "Ordered Cardinality Limit",
    answer: "SELECT TOP(5) GeographyKey, City\nFROM DimGeography\nORDER BY GeographyKey ASC;"
  },
  {
    id: 93,
    level: "Beginner",
    topic: "TOP / FETCH",
    question: "Isolate the top 8 records from DimSalesTerritory tracking lowest numeric parameters on SalesTerritoryKey fields.",
    hint: "Filter structural regional indicators sorting ascending with row checks.",
    concept: "Ordered Cardinality Limit",
    answer: "SELECT TOP(8) SalesTerritoryKey, SalesTerritoryRegion\nFROM DimSalesTerritory\nORDER BY SalesTerritoryKey ASC;"
  },
  {
    id: 94,
    level: "Beginner",
    topic: "TOP / FETCH",
    question: "Return the top 3 rows from DimDepartmentGroup sorted alphabetically ascending by the explicit DepartmentGroupName field property.",
    hint: "Apply text sorting behaviors in front of restrictive TOP boundaries.",
    concept: "Ordered Cardinality Limit",
    answer: "SELECT TOP(3) DepartmentGroupKey, DepartmentGroupName\nFROM DimDepartmentGroup\nORDER BY DepartmentGroupName ASC;"
  },
  {
    id: 95,
    level: "Beginner",
    topic: "TOP / FETCH",
    question: "Find the single lowest numeric OrganizationKey listed inside the DimOrganization organizational structural ledger.",
    hint: "Isolate minimal metrics properties using TOP(1) ascending structural mappings.",
    concept: "Extreme Value Isolation",
    answer: "SELECT TOP(1) OrganizationKey, OrganizationName\nFROM DimOrganization\nORDER BY OrganizationKey ASC;"
  },
  {
    id: 96,
    level: "Beginner",
    topic: "TOP / FETCH",
    question: "Extract the top 12 rows from FactSalesQuota tracking parameters of the newest entries using CalendarYear descending.",
    hint: "Isolate newest historical points using precise descending parameters constraints.",
    concept: "Ordered Cardinality Limit",
    answer: "SELECT TOP(12) EmployeeKey, CalendarYear, SalesAmountQuota\nFROM FactSalesQuota\nORDER BY CalendarYear DESC;"
  },
  {
    id: 97,
    level: "Beginner",
    topic: "TOP / FETCH",
    question: "Pull the top 7 rows from DimCurrency sorted alphabetically descending by CurrencyName data tags.",
    hint: "Combine text values sequencing metrics descending directly with standard TOP constraints filtering.",
    concept: "Ordered Cardinality Limit",
    answer: "SELECT TOP(7) CurrencyKey, CurrencyName\nFROM DimCurrency\nORDER BY CurrencyName DESC;"
  },
  {
    id: 98,
    level: "Beginner",
    topic: "TOP / FETCH",
    question: "Isolate the top 5 records within FactCallCenter displaying highest density tracks on FactCallCenter metrics.",
    hint: "Apply traditional descending evaluation matrices onto physical machine logs fields mapping.",
    concept: "Ordered Cardinality Limit",
    answer: "SELECT TOP(5) DateKey, IssuesRaised\nFROM FactCallCenter\nORDER BY IssuesRaised DESC;"
  },
  {
    id: 99,
    level: "Beginner",
    topic: "TOP / FETCH",
    question: "Extract the single highest transactional identifier record inside FactFinance using FinanceKey structural sequence tracking fields descending.",
    hint: "Isolate system maximum keys through standard reverse ordering cardinal limitations paths.",
    concept: "Extreme Value Isolation",
    answer: "SELECT TOP(1) FinanceKey\nFROM FactFinance\nORDER BY FinanceKey DESC;"
  },
  {
    id: 100,
    level: "Beginner",
    topic: "TOP / FETCH",
    question: "Return the top 10 records from DimEmployee displaying highest internal tracks on VacationHours descending metrics parameters.",
    hint: "Organize worker wellness properties metrics descending with explicit query thresholds parameters.",
    concept: "Ordered Cardinality Limit",
    answer: "SELECT TOP(10) EmployeeKey, FirstName, LastName, VacationHours\nFROM DimEmployee\nORDER BY VacationHours DESC;"
  },
  {
    id: 101,
    level: "Beginner",
    topic: "DISTINCT",
    question: "Find all unique values inside the Color parameter column tracking arrays of DimProduct.",
    hint: "Incorporate the DISTINCT argument explicitly to compress duplicating identity definitions.",
    concept: "Uniqueness Deduplication",
    answer: "SELECT DISTINCT Color\nFROM DimProduct;"
  },
  {
    id: 102,
    level: "Beginner",
    topic: "DISTINCT",
    question: "Query DimProduct to present all unique combinations of Color and Size options recorded across inventory matrices.",
    hint: "Apply the DISTINCT command processing over multi-attribute project fields strings definitions.",
    concept: "Multi-Attribute Deduplication",
    answer: "SELECT DISTINCT Color, Size\nFROM DimProduct;"
  },
  {
    id: 103,
    level: "Beginner",
    topic: "DISTINCT",
    question: "List all distinct Title values found within employee data mapping in DimEmployee.",
    hint: "Extract functional profile identities excluding structural duplication variations.",
    concept: "Uniqueness Deduplication",
    answer: "SELECT DISTINCT Title\nFROM DimEmployee;"
  },
  {
    id: 104,
    level: "Beginner",
    topic: "DISTINCT",
    question: "Isolate every unique DepartmentName entry configuration registered across DimEmployee records.",
    hint: "Deduplicate tracking tags cleanly via a DISTINCT statement approach structure.",
    concept: "Uniqueness Deduplication",
    answer: "SELECT DISTINCT DepartmentName\nFROM DimEmployee;"
  },
  {
    id: 105,
    level: "Beginner",
    topic: "DISTINCT",
    question: "Determine unique MaritalStatus and Gender combinations active inside DimEmployee tracking directories.",
    hint: "Project matching distinct identifiers out of compound worker category definitions.",
    concept: "Multi-Attribute Deduplication",
    answer: "SELECT DISTINCT MaritalStatus, Gender\nFROM DimEmployee;"
  },
  {
    id: 106,
    level: "Beginner",
    topic: "DISTINCT",
    question: "Extract all unique values from the EnglishEducation structural descriptor category tracking array inside DimCustomer.",
    hint: "Leverage DISTINCT filters to establish pristine qualification arrays maps.",
    concept: "Uniqueness Deduplication",
    answer: "SELECT DISTINCT EnglishEducation\nFROM DimCustomer;"
  },
  {
    id: 107,
    level: "Beginner",
    topic: "DISTINCT",
    question: "Find all unique EnglishOccupation fields combinations documented inside customer profiles inside DimCustomer.",
    hint: "Compress duplicate occupational descriptors through a clear distinct approach signature.",
    concept: "Uniqueness Deduplication",
    answer: "SELECT DISTINCT EnglishOccupation\nFROM DimCustomer;"
  },
  {
    id: 108,
    level: "Beginner",
    topic: "DISTINCT",
    question: "Isolate unique structural parameters mapping CommuteDistance values across user rows inside DimCustomer.",
    hint: "Condense variable logging strings via traditional unique filtering assignments.",
    concept: "Uniqueness Deduplication",
    answer: "SELECT DISTINCT CommuteDistance\nFROM DimCustomer;"
  },
  {
    id: 109,
    level: "Beginner",
    topic: "DISTINCT",
    question: "Extract every unique YearOpened parameter from historical resellers logs mapped into DimReseller.",
    hint: "Identify distinct launch tracking vectors via structural deduplication formulas.",
    concept: "Uniqueness Deduplication",
    answer: "SELECT DISTINCT YearOpened\nFROM DimReseller;"
  },
  {
    id: 110,
    level: "Beginner",
    topic: "DISTINCT",
    question: "Query DimReseller to return all unique variant options under OrderFrequency definitions classifications.",
    hint: "Deduplicate structural supply-chain operations definitions patterns cleanly.",
    concept: "Uniqueness Deduplication",
    answer: "SELECT DISTINCT OrderFrequency\nFROM DimReseller;"
  },
  {
    id: 111,
    level: "Beginner",
    topic: "DISTINCT",
    question: "Find all distinct ProductKey values logged within sales rows stored in FactInternetSales.",
    hint: "Identify exact transactional products catalogs metrics using unique keys projections.",
    concept: "Uniqueness Deduplication",
    answer: "SELECT DISTINCT ProductKey\nFROM FactInternetSales;"
  },
  {
    id: 112,
    level: "Beginner",
    topic: "DISTINCT",
    question: "Isolate all distinct CustomerKey indicators showing transactional actions within FactInternetSales maps logs.",
    hint: "Generate an absolute customer identity trace clearing duplicates via DISTINCT paths configurations.",
    concept: "Uniqueness Deduplication",
    answer: "SELECT DISTINCT CustomerKey\nFROM FactInternetSales;"
  },
  {
    id: 113,
    level: "Beginner",
    topic: "DISTINCT",
    question: "Extract all distinct PromotionKey numbers showing historical operations within FactInternetSales rows metrics.",
    hint: "Extract valid active promotion configurations keys explicitly omitting duplicates fields allocations.",
    concept: "Uniqueness Deduplication",
    answer: "SELECT DISTINCT PromotionKey\nFROM FactInternetSales;"
  },
  {
    id: 114,
    level: "Beginner",
    topic: "DISTINCT",
    question: "Identify distinct ProductKey arrays listed across transactional reseller distributions rows inside FactResellerSales.",
    hint: "Query clear operational mapping references utilizing basic key tracking indicators deduplication profiles.",
    concept: "Uniqueness Deduplication",
    answer: "SELECT DISTINCT ProductKey\nFROM FactResellerSales;"
  },
  {
    id: 115,
    level: "Beginner",
    topic: "DISTINCT",
    question: "Extract all distinct EmployeeKey parameters showcasing active data tracks in FactResellerSales entries.",
    hint: "Surface clean operational agent rosters filters using unique identity flags assignments.",
    concept: "Uniqueness Deduplication",
    answer: "SELECT DISTINCT EmployeeKey\nFROM FactResellerSales;"
  },
  {
    id: 116,
    level: "Beginner",
    topic: "DISTINCT",
    question: "Query FactSalesQuota to identify all unique CalendarYear allocations mapped across corporate data archives.",
    hint: "Synthesize target timeline indicators patterns omitting standard structural repeating points lines.",
    concept: "Uniqueness Deduplication",
    answer: "SELECT DISTINCT CalendarYear\nFROM FactSalesQuota;"
  },
  {
    id: 117,
    level: "Beginner",
    topic: "DISTINCT",
    question: "Isolate every unique CalendarQuarter tracking parameters allocation mapped inside FactSalesQuota structures.",
    hint: "Generate definitive operational time slices configurations maps via clear unique tracking tools.",
    concept: "Uniqueness Deduplication",
    answer: "SELECT DISTINCT CalendarQuarter\nFROM FactSalesQuota;"
  },
  {
    id: 118,
    level: "Beginner",
    topic: "DISTINCT",
    question: "Find all unique ProductKey structural indicators actively configured across records in FactProductInventory archives.",
    hint: "Trace historical material locations indices using precise identifier maps filtering duplicates.",
    concept: "Uniqueness Deduplication",
    answer: "SELECT DISTINCT ProductKey\nFROM FactProductInventory;"
  },
  {
    id: 119,
    level: "Beginner",
    topic: "DISTINCT",
    question: "Identify unique Shelf coordinates markers documented inside the FactProductInventory physical storage archives.",
    hint: "Extract baseline regional warehouse location layouts components via distinct attributes matching filters.",
    concept: "Uniqueness Deduplication",
    answer: "SELECT DISTINCT Shelf\nFROM FactProductInventory;"
  },
  {
    id: 120,
    level: "Beginner",
    topic: "DISTINCT",
    question: "Find all unique AccountKey structural identifiers active inside financial logs maps inside FactFinance.",
    hint: "Establish explicit ledger index mapping blueprints filtering standard duplicative nodes rows.",
    concept: "Uniqueness Deduplication",
    answer: "SELECT DISTINCT AccountKey\nFROM FactFinance;"
  },

  // LIKE & Wildcard Pattern Filters (121 - 145)
  {
    id: 121,
    level: "Beginner",
    topic: "LIKE & Wildcards",
    question: "Find all products in DimProduct whose EnglishProductName starts with the text string token 'Classic'.",
    hint: "Utilize the LIKE framework operator with a trailing percent sign wildcard argument pattern.",
    concept: "Prefix Pattern Matching",
    answer: "SELECT *\nFROM DimProduct\nWHERE EnglishProductName LIKE 'Classic%';"
  },
  {
    id: 122,
    level: "Beginner",
    topic: "LIKE & Wildcards",
    question: "Identify products in DimProduct with names ending explicitly in the categorical designation text signature 'Helmet'.",
    hint: "Place a leading percent sign wildcard indicator directly in front of your search literal parameters.",
    concept: "Suffix Pattern Matching",
    answer: "SELECT *\nFROM DimProduct\nWHERE EnglishProductName LIKE '%Helmet';"
  },
  {
    id: 123,
    level: "Beginner",
    topic: "LIKE & Wildcards",
    question: "Query DimProduct for rows where EnglishProductName contains the substring marker token 'Tire' anywhere within its text structure.",
    hint: "Encapsulate the core literal lookup pattern between two distinct percent sign wildcards.",
    concept: "Infix Substring Scanning",
    answer: "SELECT *\nFROM DimProduct\nWHERE EnglishProductName LIKE '%Tire%';"
  },
  {
    id: 124,
    level: "Beginner",
    topic: "LIKE & Wildcards",
    question: "Find products in DimProduct where the ProductAlternateKey contains an intermediate section code structured precisely as 'BK-'.",
    hint: "Apply traditional substring lookup scanning models onto structural string keys indexes fields.",
    concept: "Infix Substring Scanning",
    answer: "SELECT *\nFROM DimProduct\nWHERE ProductAlternateKey LIKE '%BK-%';"
  },
  {
    id: 125,
    level: "Beginner",
    topic: "LIKE & Wildcards",
    question: "Search DimEmployee to pull records where LastName begins exactly with the character token letter 'S'.",
    hint: "Filter text components matching specific character prefixes using standard pattern evaluation parameters.",
    concept: "Prefix Pattern Matching",
    answer: "SELECT *\nFROM DimEmployee\nWHERE LastName LIKE 'S%';"
  },
  {
    id: 126,
    level: "Beginner",
    topic: "LIKE & Wildcards",
    question: "Identify workers in DimEmployee whose EmailAddress terminates under the domain path sequence string '.com'.",
    hint: "Check specific trailing text layouts maps using basic wildcards string parameters syntax.",
    concept: "Suffix Pattern Matching",
    answer: "SELECT *\nFROM DimEmployee\nWHERE EmailAddress LIKE '%.com';"
  },
  {
    id: 127,
    level: "Beginner",
    topic: "LIKE & Wildcards",
    question: "Find employees in DimEmployee whose Title contains the professional organizational designation token 'Manager'.",
    hint: "Isolate explicit functional role groups across broad text parameters using enclosed patterns wildcards.",
    concept: "Infix Substring Scanning",
    answer: "SELECT *\nFROM DimEmployee\nWHERE Title LIKE '%Manager%';"
  },
  {
    id: 128,
    level: "Beginner",
    topic: "LIKE & Wildcards",
    question: "Query DimCustomer for profiles where the primary Phone number tracking string starts with the regional exchange wrapper '(206)'.",
    hint: "Match specific numeric prefix sequences utilizing direct string evaluation operators.",
    concept: "Prefix Pattern Matching",
    answer: "SELECT *\nFROM DimCustomer\nWHERE Phone LIKE '(206)%';"
  },
  {
    id: 129,
    level: "Beginner",
    topic: "LIKE & Wildcards",
    question: "Isolate customer records inside DimCustomer whose standard EmailAddress pattern strings include the provider node name 'adventure-works'.",
    hint: "Verify internal string presence metrics leveraging standard wildcard bounding operations frameworks.",
    concept: "Infix Substring Scanning",
    answer: "SELECT *\nFROM DimCustomer\nWHERE EmailAddress LIKE '%adventure-works%';"
  },
  {
    id: 130,
    level: "Beginner",
    topic: "LIKE & Wildcards",
    question: "Find resellers inside DimReseller whose business name attribute ResellerName concludes with the string 'Bikes'.",
    hint: "Implement matching expressions parsing tail metrics configurations over large textual strings tags.",
    concept: "Suffix Pattern Matching",
    answer: "SELECT *\nFROM DimReseller\nWHERE ResellerName LIKE '%Bikes';"
  },
  {
    id: 131,
    level: "Beginner",
    topic: "LIKE & Wildcards",
    question: "Identify resellers within DimReseller whose primary BankName field contains the tracking corporate text string token 'International'.",
    hint: "Scan deep corporate attributes components for specific string inclusions profiles.",
    concept: "Infix Substring Scanning",
    answer: "SELECT *\nFROM DimReseller\nWHERE BankName LIKE '%International%';"
  },
  {
    id: 132,
    level: "Beginner",
    topic: "LIKE & Wildcards",
    question: "Query FactInternetSales for rows where SalesOrderNumber patterns end exactly with the document numeric array sequence '10'.",
    hint: "Verify code properties mappings using trailing evaluation metrics configurations expressions.",
    concept: "Suffix Pattern Matching",
    answer: "SELECT *\nFROM FactInternetSales\nWHERE SalesOrderNumber LIKE '%10';"
  },
  {
    id: 133,
    level: "Beginner",
    topic: "LIKE & Wildcards",
    question: "Extract rows from FactResellerSales where SalesOrderNumber matches the design footprint pattern initiating with 'SO43'.",
    hint: "Filter exact batch operations markers via traditional prefix constraints parameters checks.",
    concept: "Prefix Pattern Matching",
    answer: "SELECT *\nFROM FactResellerSales\nWHERE SalesOrderNumber LIKE 'SO43%';"
  },
  {
    id: 134,
    level: "Beginner",
    topic: "LIKE & Wildcards",
    question: "Find promotions inside DimPromotion whose EnglishPromotionName starts with the keyword string 'Volume'.",
    hint: "Filter active pricing campaigns by utilizing exact prefix character criteria arguments mappings.",
    concept: "Prefix Pattern Matching",
    answer: "SELECT *\nFROM DimPromotion\nWHERE EnglishPromotionName LIKE 'Volume%';"
  },
  {
    id: 135,
    level: "Beginner",
    topic: "LIKE & Wildcards",
    question: "Isolate items inside DimPromotion where EnglishPromotionType tracking explicitly contains the text token 'Discount'.",
    hint: "Identify high-level processing attributes indicators via internal string evaluations expressions.",
    concept: "Infix Substring Scanning",
    answer: "SELECT *\nFROM DimPromotion\nWHERE EnglishPromotionType LIKE '%Discount%';"
  },
  {
    id: 136,
    level: "Beginner",
    topic: "LIKE & Wildcards",
    question: "Find records inside DimSalesTerritory where SalesTerritoryGroup matches the pattern string starting with 'North'.",
    hint: "Query overarching regional territories records using precise directional prefix indicators criteria.",
    concept: "Prefix Pattern Matching",
    answer: "SELECT *\nFROM DimSalesTerritory\nWHERE SalesTerritoryGroup LIKE 'North%';"
  },
  {
    id: 137,
    level: "Beginner",
    topic: "LIKE & Wildcards",
    question: "Extract records from DimGeography where the City name terminates with the character segment sequence 'field'.",
    hint: "Map specialized geographic suffixes cleanly with tail wildcard expressions patterns allocations.",
    concept: "Suffix Pattern Matching",
    answer: "SELECT *\nFROM DimGeography\nWHERE City LIKE '%field';"
  },
  {
    id: 138,
    level: "Beginner",
    topic: "LIKE & Wildcards",
    question: "Identify positions in DimEmployee where the operational tracking attribute LoginID starts with 'adventure-works\\'.",
    hint: "Filter infrastructure directory paths tags using standard prefix checks parameters configurations. Note that standard SQL accepts backslashes inside literal string configurations.",
    concept: "Prefix Pattern Matching",
    answer: "SELECT *\nFROM DimEmployee\nWHERE LoginID LIKE 'adventure-works\\%';"
  },
  {
    id: 139,
    level: "Beginner",
    topic: "LIKE & Wildcards",
    question: "Find items inside DimProduct where the standard ModelName descriptor parameter starts with the product design flag token 'Road'.",
    hint: "Query catalog production lines properties through precise alphabetic pattern tracking models.",
    concept: "Prefix Pattern Matching",
    answer: "SELECT *\nFROM DimProduct\nWHERE ModelName LIKE 'Road%';"
  },
  {
    id: 140,
    level: "Beginner",
    topic: "LIKE & Wildcards",
    question: "Query DimProduct to isolate item tracks where ModelName concludes with the generation flag token sequence string '0'.",
    hint: "Examine version properties frameworks variables using trailing checks parameters filters.",
    concept: "Suffix Pattern Matching",
    answer: "SELECT *\nFROM DimProduct\nWHERE ModelName LIKE '%0';"
  },
  {
    id: 141,
    level: "Beginner",
    topic: "LIKE & Wildcards",
    question: "Extract rows from DimCustomer where the tracking metadata attribute AddressLine1 includes the substring sequence 'Suite' anywhere.",
    hint: "Verify corporate delivery destinations layouts tracking via broad internal pattern scanner maps.",
    concept: "Infix Substring Scanning",
    answer: "SELECT *\nFROM DimCustomer\nWHERE AddressLine1 LIKE '%Suite%';"
  },
  {
    id: 142,
    level: "Beginner",
    topic: "LIKE & Wildcards",
    question: "Find entries in DimReseller where the primary BusinessType property configuration token maps exactly starting with 'Ware'.",
    hint: "Isolate enterprise categorization records profiles via standard structural starting character indicators.",
    concept: "Prefix Pattern Matching",
    answer: "SELECT *\nFROM DimReseller\nWHERE BusinessType LIKE 'Ware%';"
  },
  {
    id: 143,
    level: "Beginner",
    topic: "LIKE & Wildcards",
    question: "Isolate rows inside FactCallCenter where the WageType classification handle matches the pattern string starting with 'day'.",
    hint: "Query scheduling metrics tracks configurations profiles using simple character checks expressions.",
    concept: "Prefix Pattern Matching",
    answer: "SELECT *\nFROM FactCallCenter\nWHERE Shift LIKE 'day%';"
  },
  {
    id: 144,
    level: "Beginner",
    topic: "LIKE & Wildcards",
    question: "Find entries in DimOrganization where OrganizationName contains the tracking corporate sequence string token 'France'.",
    hint: "Isolate explicit sub-entities lines profiles from large names configurations via nested string wildcards metrics.",
    concept: "Infix Substring Scanning",
    answer: "SELECT *\nFROM DimOrganization\nWHERE OrganizationName LIKE '%France%';"
  },
  {
    id: 145,
    level: "Beginner",
    topic: "LIKE & Wildcards",
    question: "Extract data metrics out of DimDepartmentGroup where DepartmentGroupName contains the structural tag token 'Sales'.",
    hint: "Search global group distributions indicators boundaries using standard core string inclusions algorithms.",
    concept: "Infix Substring Scanning",
    answer: "SELECT *\nFROM DimDepartmentGroup\nWHERE DepartmentGroupName LIKE '%Sales%';"
  },

  // Range and List Membership (146 - 170)
  {
    id: 146,
    level: "Beginner",
    topic: "IN & BETWEEN",
    question: "Find all products in DimProduct with a ListPrice between $100 and $250 inclusive using a BETWEEN expression context.",
    hint: "Construct a standard BETWEEN boundary expression capturing upper and lower value limits constraints.",
    concept: "Inclusive Range Filtering",
    answer: "SELECT *\nFROM DimProduct\nWHERE ListPrice BETWEEN 100 AND 250;"
  },
  {
    id: 147,
    level: "Beginner",
    topic: "IN & BETWEEN",
    question: "Query DimProduct to list items where the underlying SafetyStockLevel matches exactly one of these distinct scalar values: 500, 800, or 1000.",
    hint: "Incorporate the IN clause wrapped around an explicitly populated comma-separated parameter checklist sequence.",
    concept: "Discrete List Membership",
    answer: "SELECT *\nFROM DimProduct\nWHERE SafetyStockLevel IN (500, 800, 1000);"
  },
  {
    id: 148,
    level: "Beginner",
    topic: "IN & BETWEEN",
    question: "Filter rows in DimProduct where the foundational tracking key ProductSubcategoryKey falls cleanly inside the range boundary of 1 and 10 inclusive.",
    hint: "Verify structural subcategory indexing blocks leveraging simple numerical range filters bounds.",
    concept: "Inclusive Range Filtering",
    answer: "SELECT *\nFROM DimProduct\nWHERE ProductSubcategoryKey BETWEEN 1 AND 10;"
  },
  {
    id: 149,
    level: "Beginner",
    topic: "IN & BETWEEN",
    question: "Find all entities within DimProduct whose explicit Color specification matches exactly either 'Black', 'Blue', or 'Red'.",
    hint: "Construct an IN checklist array loaded with character string literal arguments parameters configurations.",
    concept: "Discrete List Membership",
    answer: "SELECT *\nFROM DimProduct\nWHERE Color IN ('Black', 'Blue', 'Red');"
  },
  {
    id: 150,
    level: "Beginner",
    topic: "IN & BETWEEN",
    question: "Extract records from DimEmployee where the internal mapping tracking handle EmployeeKey is between 50 and 75 inclusive.",
    hint: "Filter human capital identity keys using clear sequential integer boundaries constraints markers.",
    concept: "Inclusive Range Filtering",
    answer: "SELECT *\nFROM DimEmployee\nWHERE EmployeeKey BETWEEN 50 AND 75;"
  },
  {
    id: 151,
    level: "Beginner",
    topic: "IN & BETWEEN",
    question: "Identify workers within DimEmployee whose DepartmentName matches either 'Engineering', 'Marketing', or 'Sales'.",
    hint: "Isolate specific department tracking logs by utilizing clean character arrays list metrics queries.",
    concept: "Discrete List Membership",
    answer: "SELECT *\nFROM DimEmployee\nWHERE DepartmentName IN ('Engineering', 'Marketing', 'Sales');"
  },
  {
    id: 152,
    level: "Beginner",
    topic: "IN & BETWEEN",
    question: "Query DimCustomer to find records where YearlyIncome is between $60,000 and $120,000 inclusive.",
    hint: "Execute smooth numeric distribution bounds parsing using standard BETWEEN operations strategies.",
    concept: "Inclusive Range Filtering",
    answer: "SELECT *\nFROM DimCustomer\nWHERE YearlyIncome BETWEEN 60000 AND 120000;"
  },
  {
    id: 153,
    level: "Beginner",
    topic: "IN & BETWEEN",
    question: "Find customers inside DimCustomer whose documented EnglishOccupation falls strictly within this list: 'Professional', 'Management', or 'Clerical'.",
    hint: "Validate categorical demographic strings parameters metrics using a basic IN processing syntax layout.",
    concept: "Discrete List Membership",
    answer: "SELECT *\nFROM DimCustomer\nWHERE EnglishOccupation IN ('Professional', 'Management', 'Clerical');"
  },
  {
    id: 154,
    level: "Beginner",
    topic: "IN & BETWEEN",
    question: "Filter rows in DimCustomer where TotalChildren evaluates precisely to a count matching either 1, 2, or 3.",
    hint: "Check family metric attributes categories lists using explicit membership checks arguments configurations.",
    concept: "Discrete List Membership",
    answer: "SELECT *\nFROM DimCustomer\nWHERE TotalChildren IN (1, 2, 3);"
  },
  {
    id: 155,
    level: "Beginner",
    topic: "IN & BETWEEN",
    question: "Identify resellers inside DimReseller whose recorded NumberEmployees metrics falls between 10 and 50 inclusive.",
    hint: "Apply strict operational scale size parameters criteria through clean integer range calculations checks.",
    concept: "Inclusive Range Filtering",
    answer: "SELECT *\nFROM DimReseller\nWHERE NumberEmployees BETWEEN 10 AND 50;"
  },
  {
    id: 156,
    level: "Beginner",
    topic: "IN & BETWEEN",
    question: "Find resellers inside DimReseller tracking operations within these specific standard baseline values under BankName: 'Primary Bank' or 'United Bank'.",
    hint: "Isolate financial entity partnerships mappings via simple character string array selectors expressions.",
    concept: "Discrete List Membership",
    answer: "SELECT *\nFROM DimReseller\nWHERE BankName IN ('Primary Bank', 'United Bank');"
  },
  {
    id: 157,
    level: "Beginner",
    topic: "IN & BETWEEN",
    question: "Query FactInternetSales to pull rows where the calculated baseline value parameters metrics SalesAmount are between $500 and $1500 inclusive.",
    hint: "Restrict transactional volume scale processing using traditional inclusive range definitions models.",
    concept: "Inclusive Range Filtering",
    answer: "SELECT *\nFROM FactInternetSales\nWHERE SalesAmount BETWEEN 500 AND 1500;"
  },
  {
    id: 158,
    level: "Beginner",
    topic: "IN & BETWEEN",
    question: "Extract records from FactInternetSales where the dimensional linkage indicator key SalesTerritoryKey sits strictly inside the list parameters (1, 2, 3, 4, 5).",
    hint: "Isolate regional geographic transactional groups blocks using clear key list filters selectors.",
    concept: "Discrete List Membership",
    answer: "SELECT *\nFROM FactInternetSales\nWHERE SalesTerritoryKey IN (1, 2, 3, 4, 5);"
  },
  {
    id: 159,
    level: "Beginner",
    topic: "IN & BETWEEN",
    question: "Identify lines inside FactResellerSales where the unit distribution item count metric OrderQuantity is between 5 and 20 inclusive.",
    hint: "Construct basic order distribution density thresholds maps using direct mathematical ranges validation.",
    concept: "Inclusive Range Filtering",
    answer: "SELECT *\nFROM FactResellerSales\nWHERE OrderQuantity BETWEEN 5 AND 20;"
  },
  {
    id: 160,
    level: "Beginner",
    topic: "IN & BETWEEN",
    question: "Find entries inside FactResellerSales where the promotional tracking indicator PromotionKey maps to values within this array checklist: 2, 3, 4, or 5.",
    hint: "Isolate marketing campaigns distribution batches configurations through straightforward set identification logic.",
    concept: "Discrete List Membership",
    answer: "SELECT *\nFROM FactResellerSales\nWHERE PromotionKey IN (2, 3, 4, 5);"
  },
  {
    id: 161,
    level: "Beginner",
    topic: "IN & BETWEEN",
    question: "Query FactSalesQuota to identify data records where the tracking element CalendarYear maps to either 2011, 2012, or 2013 exactly.",
    hint: "Filter multi-year operational data slices configurations matrices utilizing standard set elements checks indicators.",
    concept: "Discrete List Membership",
    answer: "SELECT *\nFROM FactSalesQuota\nWHERE CalendarYear IN (2011, 2012, 2013);"
  },
  {
    id: 162,
    level: "Beginner",
    topic: "IN & BETWEEN",
    question: "Find rows inside FactProductInventory tracking standard UnitCost valuations metrics across boundaries between $10 and $50 inclusive.",
    hint: "Map inventory financial evaluation matrices cleanly using clear numeric scale brackets configurations.",
    concept: "Inclusive Range Filtering",
    answer: "SELECT *\nFROM FactProductInventory\nWHERE UnitCost BETWEEN 10 AND 50;"
  },
  {
    id: 163,
    level: "Beginner",
    topic: "IN & BETWEEN",
    question: "Identify configurations inside FactProductInventory where the physical site tracking code column Shelf maps explicitly to either 'A', 'B', or 'C'.",
    hint: "Filter warehouse zones locations arrays via straightforward character array parameters indicators checks.",
    concept: "Discrete List Membership",
    answer: "SELECT *\nFROM FactProductInventory\nWHERE Shelf IN ('A', 'B', 'C');"
  },
  {
    id: 164,
    level: "Beginner",
    topic: "IN & BETWEEN",
    question: "Extract records from FactCallCenter where active worker counts LevelOneOperators are tracked explicitly between 2 and 5 inclusive.",
    hint: "Query staffing optimization structures density levels using standard intermediate mathematical thresholds filters.",
    concept: "Inclusive Range Filtering",
    answer: "SELECT *\nFROM FactCallCenter\nWHERE LevelOneOperators BETWEEN 2 AND 5;"
  },
  {
    id: 165,
    level: "Beginner",
    topic: "IN & BETWEEN",
    question: "Find operational shifts inside FactCallCenter where the structural identifiers parameter WageType fits inside the target set list handles ('midnight', 'night').",
    hint: "Isolate out-of-hours infrastructure call volume parameters via basic discrete text selectors formulas.",
    concept: "Discrete List Membership",
    answer: "SELECT *\nFROM FactCallCenter\nWHERE Shift IN ('midnight', 'night');"
  },
  {
    id: 166,
    level: "Beginner",
    topic: "IN & BETWEEN",
    question: "Query FactFinance for entries displaying active AccountKey metrics tracking mappings between 10 and 100 inclusive.",
    hint: "Examine financial data structures blocks using simple structural index range verification tools.",
    concept: "Inclusive Range Filtering",
    answer: "SELECT *\nFROM FactFinance\nWHERE AccountKey BETWEEN 10 AND 100;"
  },
  {
    id: 167,
    level: "Beginner",
    topic: "IN & BETWEEN",
    question: "Isolate tracking tracks inside FactFinance specifying ScenarioKey connections that map exactly matching either 1, 2, or 3.",
    hint: "Group cross-scenario corporate budget projections matrices maps utilizing clean set criteria assignments.",
    concept: "Discrete List Membership",
    answer: "SELECT *\nFROM FactFinance\nWHERE ScenarioKey IN (1, 2, 3);"
  },
  {
    id: 168,
    level: "Beginner",
    topic: "IN & BETWEEN",
    question: "Find items in DimGeography where the identifier key GeographyKey maps across boundaries between 100 and 200 inclusive.",
    hint: "Isolate geographic tracking vectors blocks via regular ascending primary key integer ranges verification.",
    concept: "Inclusive Range Filtering",
    answer: "SELECT *\nFROM DimGeography\nWHERE GeographyKey BETWEEN 100 AND 200;"
  },
  {
    id: 169,
    level: "Beginner",
    topic: "IN & BETWEEN",
    question: "Identify geographic records within DimGeography mapping regions situated explicitly inside either 'Australia', 'Canada', or 'Germany'.",
    hint: "Filter sovereign regional indicators structures arrays using basic string list verification mechanics.",
    concept: "Discrete List Membership",
    answer: "SELECT *\nFROM DimGeography\nWHERE CountryRegionName IN ('Australia', 'Canada', 'Germany');"
  },
  {
    id: 170,
    level: "Beginner",
    topic: "IN & BETWEEN",
    question: "Query DimSalesTerritory to fetch rows containing SalesTerritoryRegion handles matching either 'Northwest', 'Southwest', or 'Central'.",
    hint: "Isolate strategic market layout segments maps using traditional set definitions logic arguments checks.",
    concept: "Discrete List Membership",
    answer: "SELECT *\nFROM DimSalesTerritory\nWHERE SalesTerritoryRegion IN ('Northwest', 'Southwest', 'Central');"
  },

  // NULL Data Handling Constraints (171 - 200)
  {
    id: 171,
    level: "Beginner",
    topic: "NULL Handling",
    question: "Find all products in DimProduct where the standard mapping configuration attribute Class is explicitly recorded as a NULL state pointer value.",
    hint: "Construct your filtering check directive leveraging the specific operator phrase IS NULL explicitly.",
    concept: "NULL State Detection",
    answer: "SELECT *\nFROM DimProduct\nWHERE Class IS NULL;"
  },
  {
    id: 172,
    level: "Beginner",
    topic: "NULL Handling",
    question: "Identify items in DimProduct that possess a definitively populated, non-null structural definition value under the Style tracking parameter column.",
    hint: "Leverage the negated state validation operator mechanism IS NOT NULL within your expression structures.",
    concept: "Valid State Verification",
    answer: "SELECT *\nFROM DimProduct\nWHERE Style IS NOT NULL;"
  },
  {
    id: 173,
    level: "Beginner",
    topic: "NULL Handling",
    question: "Query DimProduct for rows where the ProductSubcategoryKey reference links are completely unassigned and contain NULL states.",
    hint: "Isolate unmapped dimension nodes by using direct IS NULL query validations specifications.",
    concept: "NULL State Detection",
    answer: "SELECT *\nFROM DimProduct\nWHERE ProductSubcategoryKey IS NULL;"
  },
  {
    id: 174,
    level: "Beginner",
    topic: "NULL Handling",
    question: "Find products within DimProduct displaying an active tracking state where the formal model marker ModelName evaluates to a non-null definition.",
    hint: "Filter out unpopulated production fields lines patterns using the standard IS NOT NULL instruction sets.",
    concept: "Valid State Verification",
    answer: "SELECT *\nFROM DimProduct\nWHERE ModelName IS NOT NULL;"
  },
  {
    id: 175,
    level: "Beginner",
    topic: "NULL Handling",
    question: "Identify entries inside DimProduct where the physical mass descriptor property Weight is missing from operational datasets.",
    hint: "Query missing structural dimensions metrics variables using precise IS NULL parameter checks equations.",
    concept: "NULL State Detection",
    answer: "SELECT *\nFROM DimProduct\nWHERE Weight IS NULL;"
  },
  {
    id: 176,
    level: "Beginner",
    topic: "NULL Handling",
    question: "Find employees in DimEmployee who do not have any supervisor specified because their ParentEmployeeKey field evaluates to a NULL state marker.",
    hint: "Identify organizational root hierarchy nodes directly using an IS NULL validator signature.",
    concept: "NULL State Detection",
    answer: "SELECT *\nFROM DimEmployee\nWHERE ParentEmployeeKey IS NULL;"
  },
  {
    id: 177,
    level: "Beginner",
    topic: "NULL Handling",
    question: "Isolate rows in DimEmployee where the structural tracking indicator parameter MiddleName contains a valid, active character value string.",
    hint: "Extract records holding fully complete human asset naming vectors using standard IS NOT NULL metrics logic.",
    concept: "Valid State Verification",
    answer: "SELECT *\nFROM DimEmployee\nWHERE MiddleName IS NOT NULL;"
  },
  {
    id: 178,
    level: "Beginner",
    topic: "NULL Handling",
    question: "Query DimEmployee to find entries completely missing standard corporate communications email handles under EmailAddress.",
    hint: "Examine infrastructure gaps across organizational directories utilizing direct IS NULL structural tools.",
    concept: "NULL State Detection",
    answer: "SELECT *\nFROM DimEmployee\nWHERE EmailAddress IS NULL;"
  },
  {
    id: 179,
    level: "Beginner",
    topic: "NULL Handling",
    question: "Extract records from DimEmployee where the metadata property column Title returns a valid, fully configured descriptive string parameter.",
    hint: "Omit incomplete personnel logging structures from display pools using clear IS NOT NULL qualifiers paths.",
    concept: "Valid State Verification",
    answer: "SELECT *\nFROM DimEmployee\nWHERE Title IS NOT NULL;"
  },
  {
    id: 180,
    level: "Beginner",
    topic: "NULL Handling",
    question: "Identify positions in DimEmployee where the structural organizational classification data string DepartmentName is missing.",
    hint: "Isolate untracked organizational matrix mapping vectors using basic missing value identifiers validation scripts.",
    concept: "NULL State Detection",
    answer: "SELECT *\nFROM DimEmployee\nWHERE DepartmentName IS NULL;"
  },
  {
    id: 181,
    level: "Beginner",
    topic: "NULL Handling",
    question: "Find rows inside DimCustomer where MiddleName registers as an unpopulated NULL entity block context.",
    hint: "Filter demographic database properties maps cleanly using basic IS NULL processing tools constraints.",
    concept: "NULL State Detection",
    answer: "SELECT *\nFROM DimCustomer\nWHERE MiddleName IS NULL;"
  },
  {
    id: 182,
    level: "Beginner",
    topic: "NULL Handling",
    question: "Isolate customer records inside DimCustomer tracking explicit data strings inside AddressLine2 fields.",
    hint: "Locate extended secondary delivery coordinates data entries paths leveraging standard IS NOT NULL parameters evaluations.",
    concept: "Valid State Verification",
    answer: "SELECT *\nFROM DimCustomer\nWHERE AddressLine2 IS NOT NULL;"
  },
  {
    id: 183,
    level: "Beginner",
    topic: "NULL Handling",
    question: "Query DimCustomer for profiles missing recorded validation numbers across Title attributes structures fields.",
    hint: "Isolate missing prefix categorization records structures using standard IS NULL equations layouts.",
    concept: "NULL State Detection",
    answer: "SELECT *\nFROM DimCustomer\nWHERE Title IS NULL;"
  },
  {
    id: 184,
    level: "Beginner",
    topic: "NULL Handling",
    question: "Find entries in DimReseller where the primary corporate indicator mapping column ProductLine is missing raw strings.",
    hint: "Trace unassigned supply chain account targets vectors fields via clear IS NULL checking functions expressions.",
    concept: "NULL State Detection",
    answer: "SELECT *\nFROM DimReseller\nWHERE ProductLine IS NULL;"
  },
  {
    id: 185,
    level: "Beginner",
    topic: "NULL Handling",
    question: "Identify resellers inside DimReseller possessing a valid, completely active metadata record string under BusinessType parameters.",
    hint: "Omit unclassified enterprise data nodes logs fields leveraging strict IS NOT NULL constraints criteria assignments.",
    concept: "Valid State Verification",
    answer: "SELECT *\nFROM DimReseller\nWHERE BusinessType IS NOT NULL;"
  },
  {
    id: 186,
    level: "Beginner",
    topic: "NULL Handling",
    question: "Query DimReseller to return entries containing a completely unpopulated information string inside the primary MinPaymentAmount metric column.",
    hint: "Check specific calculated thresholds indicators metrics allocations for blank allocations states utilizing explicit validation commands.",
    concept: "NULL State Detection",
    answer: "SELECT *\nFROM DimReseller\nWHERE MinPaymentAmount IS NULL;"
  },
  {
    id: 187,
    level: "Beginner",
    topic: "NULL Handling",
    question: "Extract records from FactInternetSales where the transactional logging indicator metadata column CarrierTrackingNumber contains a completely unpopulated field string.",
    hint: "Identify untracked operational processing units paths directly via fundamental missing states checks logic expressions.",
    concept: "NULL State Detection",
    answer: "SELECT *\nFROM FactInternetSales\nWHERE CarrierTrackingNumber IS NULL;"
  },
  {
    id: 188,
    level: "Beginner",
    topic: "NULL Handling",
    question: "Find lines inside FactInternetSales tracking fully explicit, non-null numeric validation indicators under CustomerPONumber mappings logs fields.",
    hint: "Filter transaction rows verifying concrete verification identifiers paths using traditional IS NOT NULL arguments models.",
    concept: "Valid State Verification",
    answer: "SELECT *\nFROM FactInternetSales\nWHERE CustomerPONumber IS NOT NULL;"
  },
  {
    id: 189,
    level: "Beginner",
    topic: "NULL Handling",
    question: "Identify entries inside FactResellerSales missing recorded indicators codes under the standard corporate tracking field column CarrierTrackingNumber.",
    hint: "Examine shipping workflow exceptions lists via straightforward primary structural checks equations structures.",
    concept: "NULL State Detection",
    answer: "SELECT *\nFROM FactResellerSales\nWHERE CarrierTrackingNumber IS NULL;"
  },
  {
    id: 190,
    level: "Beginner",
    topic: "NULL Handling",
    question: "Isolate data records inside FactResellerSales specifying an active validation string parameter configured under CustomerPONumber paths.",
    hint: "Validate structural supply tracking records details matrices using clear IS NOT NULL selectors algorithms expressions.",
    concept: "Valid State Verification",
    answer: "SELECT *\nFROM FactResellerSales\nWHERE CustomerPONumber IS NOT NULL;"
  },
  {
    id: 191,
    level: "Beginner",
    topic: "NULL Handling",
    question: "Find rows inside FactProductInventory tracking missing metadata parameters flags under the primary physical location layer indicator Bin.",
    hint: "Locate coordinates logging configuration errors across inventory tables using basic IS NULL equations specifications.",
    concept: "NULL State Detection",
    answer: "SELECT *\nFROM FactProductInventory\nWHERE Bin IS NULL;"
  },
  {
    id: 192,
    level: "Beginner",
    topic: "NULL Handling",
    question: "Query FactCallCenter for entries missing a standard text category descriptor parameter under the core WageType tracking array.",
    hint: "Isolate logging classification anomalies fields directly leveraging standard structural missing operators properties validation.",
    concept: "NULL State Detection",
    answer: "SELECT *\nFROM FactCallCenter\nWHERE WageType IS NULL;"
  },
  {
    id: 193,
    level: "Beginner",
    topic: "NULL Handling",
    question: "Extract data metrics out of FactFinance showing valid, fully active string classifications fields configured inside the AccountKey mapping columns.",
    hint: "Isolate transactional accounting allocations grids fields using clean IS NOT NULL testing parameters formulas.",
    concept: "Valid State Verification",
    answer: "SELECT *\nFROM FactFinance\nWHERE AccountKey IS NOT NULL;"
  },
  {
    id: 194,
    level: "Beginner",
    topic: "NULL Handling",
    question: "Find entries in DimOrganization completely missing standard parent nodes reference pointers under ParentOrganizationKey indicators.",
    hint: "Establish absolute root system organizational accounts mappings via simple standard operational missing value checks parameters.",
    concept: "NULL State Detection",
    answer: "SELECT *\nFROM DimOrganization\nWHERE ParentOrganizationKey IS NULL;"
  },
  {
    id: 195,
    level: "Beginner",
    topic: "NULL Handling",
    question: "Isolate structural items inside DimDepartmentGroup containing fully configured parent connection IDs under ParentDepartmentGroupKey parameters flags.",
    hint: "Query explicit intermediate grouping distributions grids paths using traditional non-null arguments validators architectures.",
    concept: "Valid State Verification",
    answer: "SELECT *\nFROM DimDepartmentGroup\nWHERE ParentDepartmentGroupKey IS NOT NULL;"
  },
  {
    id: 196,
    level: "Beginner",
    topic: "NULL Handling",
    question: "Find records inside DimGeography where the primary regional mapping metadata property column AreaCode contains completely unpopulated fields.",
    hint: "Filter physical market data parameters indicators grids fields utilizing clear IS NULL instructions sets tools.",
    concept: "NULL State Detection",
    answer: "SELECT *\nFROM DimGeography\nWHERE AreaCode IS NULL;"
  },
  {
    id: 197,
    level: "Beginner",
    topic: "NULL Handling",
    question: "Extract rows from DimSalesTerritory where the image tracking component placeholder column SalesTerritoryImage maintains a valid data tracking state.",
    hint: "Locate populated system media tracking containers blocks utilizing standard non-null criteria filters parameters mapping.",
    concept: "Valid State Verification",
    answer: "SELECT *\nFROM DimSalesTerritory\nWHERE SalesTerritoryImage IS NOT NULL;"
  },
  {
    id: 198,
    level: "Beginner",
    topic: "NULL Handling",
    question: "Identify configurations inside DimPromotion tracking explicit validation codes within the primary EnglishPromotionCategory parameter descriptor strings.",
    hint: "Examine campaign distribution attributes maps files fields using clear IS NOT NULL checking algorithms calculations.",
    concept: "Valid State Verification",
    answer: "SELECT *\nFROM DimPromotion\nWHERE EnglishPromotionCategory IS NOT NULL;"
  },
  {
    id: 199,
    level: "Beginner",
    topic: "NULL Handling",
    question: "Find entries in FactSalesQuota showing unassigned quota value tracking parameters parameters under SalesAmountQuota.",
    hint: "Isolate gaps within planned sales distributions tables matrices using standard operational IS NULL arguments configurations.",
    concept: "NULL State Detection",
    answer: "SELECT *\nFROM FactSalesQuota\nWHERE SalesAmountQuota IS NULL;"
  },
  {
    id: 200,
    level: "Beginner",
    topic: "NULL Handling",
    question: "Query DimCurrency to isolate rows containing fully configured alternative identification codes under CurrencyAlternateKey.",
    hint: "Synthesize target reference list properties metrics fields validating complete entries using traditional IS NOT NULL mechanisms paths.",
    concept: "Valid State Verification",
    answer: "SELECT *\nFROM DimCurrency\nWHERE CurrencyAlternateKey IS NOT NULL;"
  },
  {
    id: 201,
    level: "Intermediate",
    topic: "INNER JOIN",
    question: "Combine DimProduct with DimProductSubcategory using ProductSubcategoryKey to display the product name alongside its English subcategory name.",
    hint: "Leverage an INNER JOIN syntax pattern anchoring matching rows strictly across matching primary and foreign key elements.",
    concept: "Standard Multi-Table Association",
    answer: "SELECT p.EnglishProductName, s.EnglishProductSubcategoryName\nFROM DimProduct p\nINNER JOIN DimProductSubcategory s ON p.ProductSubcategoryKey = s.ProductSubcategoryKey;"
  },
  {
    id: 202,
    level: "Intermediate",
    topic: "INNER JOIN",
    question: "Associate FactInternetSales with DimProduct on ProductKey to show each transactional SalesOrderNumber mapped directly to its matching EnglishProductName data.",
    hint: "Apply traditional dimensional normalization joining rules linking transaction lines straight into material definitions descriptors maps.",
    concept: "Fact-to-Dimension Normalization",
    answer: "SELECT f.SalesOrderNumber, p.EnglishProductName\nFROM FactInternetSales f\nINNER JOIN DimProduct p ON f.ProductKey = p.ProductKey;"
  },
  {
    id: 203,
    level: "Intermediate",
    topic: "INNER JOIN",
    question: "Link FactInternetSales with DimCustomer across the shared identity attribute CustomerKey to extract transactional values displaying customer LastName alongside order numbers.",
    hint: "Bind fact records directly to user master entity tables using precise matching key equations patterns definitions.",
    concept: "Fact-to-Dimension Normalization",
    answer: "SELECT f.SalesOrderNumber, c.LastName\nFROM FactInternetSales f\nINNER JOIN DimCustomer c ON f.CustomerKey = c.CustomerKey;"
  },
  {
    id: 204,
    level: "Intermediate",
    topic: "INNER JOIN",
    question: "Join FactInternetSales to DimDate on OrderDateKey to evaluate explicit transactions showing the SalesOrderNumber paired with FullDateAlternateKey tracking.",
    hint: "Map transactional records into core canonical tracking calendars dimensions via strict primary integrity constraint keys validation mappings.",
    concept: "Fact-to-Dimension Normalization",
    answer: "SELECT f.SalesOrderNumber, d.FullDateAlternateKey\nFROM FactInternetSales f\nINNER JOIN DimDate d ON f.OrderDateKey = d.DateKey;"
  },
  {
    id: 205,
    level: "Intermediate",
    topic: "INNER JOIN",
    question: "Connect FactResellerSales with DimProduct across ProductKey to trace B2B trading streams showing SalesOrderNumber alongside EnglishProductName strings.",
    hint: "Bridge operational reseller logs cleanly into structural inventory definitions dimensions rows via explicit key alignments.",
    concept: "Fact-to-Dimension Normalization",
    answer: "SELECT f.SalesOrderNumber, p.EnglishProductName\nFROM FactResellerSales f\nINNER JOIN DimProduct p ON f.ProductKey = p.ProductKey;"
  },
  {
    id: 206,
    level: "Intermediate",
    topic: "INNER JOIN",
    question: "Associate FactResellerSales to DimReseller using ResellerKey to discover specific vendor assignments showcasing SalesOrderNumber alongside ResellerName parameters.",
    hint: "Align physical business channels metadata metrics with individual document transactions sets via traditional multi-table links configurations.",
    concept: "Fact-to-Dimension Normalization",
    answer: "SELECT f.SalesOrderNumber, r.ResellerName\nFROM FactResellerSales f\nINNER JOIN DimReseller r ON f.ResellerKey = r.ResellerKey;"
  },
  {
    id: 207,
    level: "Intermediate",
    topic: "INNER JOIN",
    question: "Link FactResellerSales into DimEmployee across EmployeeKey to trace workforce performance files showing SalesOrderNumber alongside LastName fields.",
    hint: "Examine data rows tracking human asset accounts vectors linked straight to specific operational processing steps parameters allocations.",
    concept: "Fact-to-Dimension Normalization",
    answer: "SELECT f.SalesOrderNumber, e.LastName\nFROM FactResellerSales f\nINNER JOIN DimEmployee e ON f.EmployeeKey = e.EmployeeKey;"
  },
  {
    id: 208,
    level: "Intermediate",
    topic: "INNER JOIN",
    question: "Join FactProductInventory into DimProduct using ProductKey to produce a comprehensive report showing UnitsBalance matching explicit EnglishProductName structures.",
    hint: "Construct basic stock-keeping validation arrays through tight cross-table structural intersections algorithms calculations entries.",
    concept: "Fact-to-Dimension Normalization",
    answer: "SELECT i.UnitsBalance, p.EnglishProductName\nFROM FactProductInventory i\nINNER JOIN DimProduct p ON i.ProductKey = p.ProductKey;"
  },
  {
    id: 209,
    level: "Intermediate",
    topic: "INNER JOIN",
    question: "Connect FactSalesQuota directly into DimEmployee across EmployeeKey pointers to map human capital targets tracking showing SalesAmountQuota paired with LastName variables.",
    hint: "Synthesize operational target planning sheets matrices cleanly with explicit personal identification tags structures maps variables.",
    concept: "Fact-to-Dimension Normalization",
    answer: "SELECT q.SalesAmountQuota, e.LastName\nFROM FactSalesQuota q\nINNER JOIN DimEmployee e ON q.EmployeeKey = e.EmployeeKey;"
  },
  {
    id: 210,
    level: "Intermediate",
    topic: "INNER JOIN",
    question: "Link FactCallCenter directly to DimDate across DateKey mappings to analyze infrastructure logs showing Calls metrics volumes paired with FullDateAlternateKey timelines.",
    hint: "Correlate server runtime snapshots entries tracking properties with formal calendar dimension elements parameters grids structures.",
    concept: "Fact-to-Dimension Normalization",
    answer: "SELECT c.Calls, d.FullDateAlternateKey\nFROM FactCallCenter c\nINNER JOIN DimDate d ON c.DateKey = d.DateKey;"
  },
  {
    id: 211,
    level: "Intermediate",
    topic: "INNER JOIN",
    question: "Join FactFinance straight into DimAccount using AccountKey references to output standard ledger transaction streams showing Amount matched with AccountDescription textual descriptors.",
    hint: "Map internal financial distributions lines components directly into formal standard corporate accounts directories layouts metrics.",
    concept: "Fact-to-Dimension Normalization",
    answer: "SELECT f.Amount, a.AccountDescription\nFROM FactFinance f\nINNER JOIN DimAccount a ON f.AccountKey = a.AccountKey;"
  },
  {
    id: 212,
    level: "Intermediate",
    topic: "INNER JOIN",
    question: "Connect FactFinance straight into DimOrganization using OrganizationKey pointers to verify accounting partitions showing Amount matched to OrganizationName indicators.",
    hint: "Align macro operational entity structures with individual transaction log lines entries via tight standard primary key matching rules sets.",
    concept: "Fact-to-Dimension Normalization",
    answer: "SELECT f.Amount, o.OrganizationName\nFROM FactFinance f\nINNER JOIN DimOrganization o ON f.OrganizationKey = o.OrganizationKey;"
  },
  {
    id: 213,
    level: "Intermediate",
    topic: "INNER JOIN",
    question: "Link FactFinance straight into DimScenario using ScenarioKey to categorize raw monetary distributions showing Amount paired with ScenarioName definitions attributes.",
    hint: "Group ledger balancing rows metrics according to structural systemic tracking parameters utilizing clear cross-table connections pathways.",
    concept: "Fact-to-Dimension Normalization",
    answer: "SELECT f.Amount, s.ScenarioName\nFROM FactFinance f\nINNER JOIN DimScenario s ON f.ScenarioKey = s.ScenarioKey;"
  },
  {
    id: 214,
    level: "Intermediate",
    topic: "INNER JOIN",
    question: "Join DimCustomer into DimGeography across GeographyKey indicators to contextualize demographic user files showing LastName matched with City names attributes.",
    hint: "Trace personal geographical context boundaries setups profiles by parsing structural shared key indicators pathways across master tracking entities.",
    concept: "Dimension-to-Dimension Relationship",
    answer: "SELECT c.LastName, g.City\nFROM DimCustomer c\nINNER JOIN DimGeography g ON c.GeographyKey = g.GeographyKey;"
  },
  {
    id: 215,
    level: "Intermediate",
    topic: "INNER JOIN",
    question: "Connect DimReseller into DimGeography using GeographyKey connections to audit corporate storefront networks layouts showcasing ResellerName paired with StateProvinceName details fields.",
    hint: "Map enterprise supply-chain anchors variables straight to regional political maps boundaries configurations via exact identity key match expressions.",
    concept: "Dimension-to-Dimension Relationship",
    answer: "SELECT r.ResellerName, g.StateProvinceName\nFROM DimReseller r\nINNER JOIN DimGeography g ON r.GeographyKey = g.GeographyKey;"
  },
  {
    id: 216,
    level: "Intermediate",
    topic: "INNER JOIN",
    question: "Link DimEmployee into DimSalesTerritory across SalesTerritoryKey linkages to establish workforce assignment alignments showing LastName paired with SalesTerritoryRegion text handles.",
    hint: "Correlate human talent data blocks properties structures directly with geographical administrative tracking matrix assignments configurations.",
    concept: "Dimension-to-Dimension Relationship",
    answer: "SELECT e.LastName, t.SalesTerritoryRegion\nFROM DimEmployee e\nINNER JOIN DimSalesTerritory t ON e.SalesTerritoryKey = t.SalesTerritoryKey;"
  },
  {
    id: 217,
    level: "Intermediate",
    topic: "INNER JOIN",
    question: "Join DimProductSubcategory into DimProductCategory across ProductCategoryKey pointers to evaluate classification trees showing EnglishProductSubcategoryName paired with EnglishProductCategoryName attributes strings.",
    hint: "Deconstruct multi-tiered taxonomy arrays levels fields down through tight relational index bindings configurations profiles.",
    concept: "Hierarchical Dimension Normalization",
    answer: "SELECT s.EnglishProductSubcategoryName, c.EnglishProductCategoryName\nFROM DimProductSubcategory s\nINNER JOIN DimProductCategory c ON s.ProductCategoryKey = c.ProductCategoryKey;"
  },
  {
    id: 218,
    level: "Intermediate",
    topic: "INNER JOIN",
    question: "Link FactInternetSales straight to DimPromotion using PromotionKey to check target campaign efficiencies showing SalesOrderNumber matched with EnglishPromotionName.",
    hint: "Correlate transaction lines instances metrics directly with individual active pricing marketing adjustments templates profiles via shared structural primary attributes keys.",
    concept: "Fact-to-Dimension Normalization",
    answer: "SELECT f.SalesOrderNumber, p.EnglishPromotionName\nFROM FactInternetSales f\nINNER JOIN DimPromotion p ON f.PromotionKey = p.PromotionKey;"
  },
  {
    id: 219,
    level: "Intermediate",
    topic: "INNER JOIN",
    question: "Connect FactInternetSales straight to DimSalesTerritory across SalesTerritoryKey tracking to trace macro revenue points showing SalesOrderNumber matched with SalesTerritoryGroup definitions.",
    hint: "Bridge direct transactional entries tables blocks into administrative region tracking layers via explicit relational references parameters settings.",
    concept: "Fact-to-Dimension Normalization",
    answer: "SELECT f.SalesOrderNumber, t.SalesTerritoryGroup\nFROM FactInternetSales f\nINNER JOIN DimSalesTerritory t ON f.SalesTerritoryKey = t.SalesTerritoryKey;"
  },
  {
    id: 220,
    level: "Intermediate",
    topic: "INNER JOIN",
    question: "Join FactResellerSales straight to DimPromotion across PromotionKey markers to audit commercial discounts interactions showcasing SalesOrderNumber paired with EnglishPromotionName string components.",
    hint: "Align distribution workflow operations metrics maps records with specific business campaign descriptors tags fields utilizing clean relational connections scripts.",
    concept: "Fact-to-Dimension Normalization",
    answer: "SELECT f.SalesOrderNumber, p.EnglishPromotionName\nFROM FactResellerSales f\nINNER JOIN DimPromotion p ON f.PromotionKey = p.PromotionKey;"
  },
  {
    id: 221,
    level: "Intermediate",
    topic: "INNER JOIN",
    question: "Link FactResellerSales straight to DimSalesTerritory via SalesTerritoryKey constraints to verify regional market flows showing SalesOrderNumber matched with SalesTerritoryCountry properties.",
    hint: "Track regional enterprise distributions channels parameters allocations directly using fundamental relational indicators matching profiles configurations.",
    concept: "Fact-to-Dimension Normalization",
    answer: "SELECT f.SalesOrderNumber, t.SalesTerritoryCountry\nFROM FactResellerSales f\nINNER JOIN DimSalesTerritory t ON f.SalesTerritoryKey = t.SalesTerritoryKey;"
  },
  {
    id: 222,
    level: "Intermediate",
    topic: "INNER JOIN",
    question: "Connect FactResellerSales to DimCurrency across CurrencyKey indicators to audit macro-currency usage maps tracking showing SalesOrderNumber paired with CurrencyName descriptions data.",
    hint: "Align multi-currency transactional streams records files fields with formal localization tracking standards matrices using strict shared variables maps formulas.",
    concept: "Fact-to-Dimension Normalization",
    answer: "SELECT f.SalesOrderNumber, c.CurrencyName\nFROM FactResellerSales f\nINNER JOIN DimCurrency c ON f.CurrencyKey = c.CurrencyKey;"
  },
  {
    id: 223,
    level: "Intermediate",
    topic: "INNER JOIN",
    question: "Join FactInternetSales to DimCurrency across CurrencyKey vectors to evaluate currency dependencies showing SalesOrderNumber paired with CurrencyAlternateKey system shortcuts tags.",
    hint: "Isolate specific external accounting handles variables paths through regular cross-table identity evaluations models setups.",
    concept: "Fact-to-Dimension Normalization",
    answer: "SELECT f.SalesOrderNumber, c.CurrencyAlternateKey\nFROM FactInternetSales f\nINNER JOIN DimCurrency c ON f.CurrencyKey = c.CurrencyKey;"
  },
  {
    id: 224,
    level: "Intermediate",
    topic: "INNER JOIN",
    question: "Link FactProductInventory straight to DimSalesTerritory using standard transformation metrics flags under the structural join key to output UnitsBalance matching SalesTerritoryRegion. Note: Use intermediate dimension pathways carefully or map keys if provided directly.",
    hint: "Review actual warehouse allocations fact schema layouts properties carefully before tying targets structural links keys parameters variables.",
    concept: "Fact-to-Dimension Normalization",
    answer: "SELECT i.UnitsBalance, t.SalesTerritoryRegion\nFROM FactProductInventory i\nINNER JOIN DimSalesTerritory t ON i.SalesTerritoryKey = t.SalesTerritoryKey;"
  },
  {
    id: 225,
    level: "Intermediate",
    topic: "INNER JOIN",
    question: "Connect FactFinance straight to DimDepartmentGroup across DepartmentGroupKey lines configurations to check divisional operational ledger accounts showing Amount paired with DepartmentGroupName parameters.",
    hint: "Map raw departmental financial logging segments structures elements straight to corporate reporting structure classification maps via simple direct equations layouts profiles.",
    concept: "Fact-to-Dimension Normalization",
    answer: "SELECT f.Amount, d.DepartmentGroupName\nFROM FactFinance f\nINNER JOIN DimDepartmentGroup d ON f.DepartmentGroupKey = d.DepartmentGroupKey;"
  },
  {
    id: 226,
    level: "Intermediate",
    topic: "INNER JOIN",
    question: "Join DimOrganization into DimGeography across GeographyKey configurations records mappings to establish corporate corporate headquarters grids layouts detailing OrganizationName matched with CountryRegionName elements fields.",
    hint: "Trace macro physical enterprise installations positions boundaries utilizing clean structural cross-dimension definitions matching paths structures.",
    concept: "Dimension-to-Dimension Relationship",
    answer: "SELECT o.OrganizationName, g.CountryRegionName\nFROM DimOrganization o\nINNER JOIN DimGeography g ON o.GeographyKey = g.GeographyKey;"
  },
  {
    id: 227,
    level: "Intermediate",
    topic: "INNER JOIN",
    question: "Link DimPromotion directly into DimDate across the historical reference key patterns to chart marketing schedule timelines showing EnglishPromotionName paired with EnglishMonthName temporal handles variables. Note: Evaluate schema to see if Promotion maps directly or via transactional layers, or has independent date links.",
    hint: "If linking independent tables containing direct date data fields elements paths, apply normal keys matching logic explicitly.",
    concept: "Dimension-to-Dimension Relationship",
    answer: "SELECT p.EnglishPromotionName, d.EnglishMonthName\nFROM DimPromotion p\nINNER JOIN DimDate d ON p.StartDateKey = d.DateKey;"
  },
  {
    id: 228,
    level: "Intermediate",
    topic: "INNER JOIN",
    question: "Connect FactCallCenter to DimEmployee across ServiceLevel tracking attributes connections strings to determine optimization shifts rosters. Note: Review schema maps to link Call Center rows matching agents tables properties structures fields.",
    hint: "Ensure exact logical properties alignment checks parameters are verified before constructing deep human metric infrastructure associations scripts.",
    concept: "Fact-to-Dimension Normalization",
    answer: "SELECT c.ServiceLevel, e.LastName\nFROM FactCallCenter c\nINNER JOIN DimEmployee e ON c.EmployeeKey = e.EmployeeKey;"
  },
  {
    id: 229,
    level: "Intermediate",
    topic: "INNER JOIN",
    question: "Join FactInternetSalesReason straight into FactInternetSales across SalesOrderNumber and SalesOrderLineNumber parameters to build root connection layers paths between sales entries and rationales indicators.",
    hint: "Establish multi-key transactional fact intersections parameters directly using fundamental composite keys relational associations maps expressions.",
    concept: "Fact-to-Fact Relationship",
    answer: "SELECT r.SalesOrderNumber, f.SalesAmount\nFROM FactInternetSalesReason r\nINNER JOIN FactInternetSales f ON r.SalesOrderNumber = f.SalesOrderNumber AND r.SalesOrderLineNumber = f.SalesOrderLineNumber;"
  },
  {
    id: 230,
    level: "Intermediate",
    topic: "INNER JOIN",
    question: "Link FactInternetSalesReason into DimSalesReason across SalesReasonKey structural indicators flags to extract specific corporate intelligence detailing SalesOrderNumber matched with SalesReasonName.",
    hint: "Trace deep operational justification mappings boundaries configurations profiles via straightforward multi-table logical connections tools structures.",
    concept: "Fact-to-Dimension Normalization",
    answer: "SELECT h.SalesOrderNumber, r.SalesReasonName\nFROM FactInternetSalesReason h\nINNER JOIN DimSalesReason r ON h.SalesReasonKey = r.SalesReasonKey;"
  },

  // LEFT JOIN Isolation Architectures (231 - 260)
  {
    id: 231,
    level: "Intermediate",
    topic: "LEFT JOIN",
    question: "Exhaustively list all items from DimProduct including those possessing no recorded sales data alongside matching transaction amounts out of FactInternetSales via LEFT JOIN.",
    hint: "Initiate your relational expression utilizing DimProduct on the primary left-hand side boundary definition matrix to retain unsold items safely.",
    concept: "Preservation of Master Records",
    answer: "SELECT p.EnglishProductName, f.SalesAmount\nFROM DimProduct p\nLEFT JOIN FactInternetSales f ON p.ProductKey = f.ProductKey;"
  },
  {
    id: 232,
    level: "Intermediate",
    topic: "LEFT JOIN",
    question: "List all items inside DimProduct including those completely decoupled from structural classification groups along with matching rows from DimProductSubcategory.",
    hint: "Leverage LEFT JOIN configurations to trace unassigned master entity data categories structures fields elegantly.",
    concept: "Orphaned Attribute Investigation",
    answer: "SELECT p.EnglishProductName, s.EnglishProductSubcategoryName\nFROM DimProduct p\nLEFT JOIN DimProductSubcategory s ON p.ProductSubcategoryKey = s.ProductSubcategoryKey;"
  },
  {
    id: 233,
    level: "Intermediate",
    topic: "LEFT JOIN",
    question: "Display a clean listing of all employees inside DimEmployee along with any secondary operational manager names via a self-referencing LEFT JOIN matching ParentEmployeeKey.",
    hint: "Apply a self-join processing layout aliasing your table into separate context containers ensuring root managers aren't dropped.",
    concept: "Self-Referential Hierarchy Mapping",
    answer: "SELECT e.LastName AS Employee, m.LastName AS Manager\nFROM DimEmployee e\nLEFT JOIN DimEmployee m ON e.ParentEmployeeKey = m.EmployeeKey;"
  },
  {
    id: 234,
    level: "Intermediate",
    topic: "LEFT JOIN",
    question: "Extract all items inside DimCustomer coupled via LEFT JOIN onto FactInternetSales, verifying customer names alongside any matching transaction identifiers.",
    hint: "Examine customer purchasing behaviors comprehensively, retaining inactive accounts records cleanly inside output screens tables blocks.",
    concept: "Preservation of Master Records",
    answer: "SELECT c.LastName, f.SalesOrderNumber\nFROM DimCustomer c\nLEFT JOIN FactInternetSales f ON c.CustomerKey = f.CustomerKey;"
  },
  {
    id: 235,
    level: "Intermediate",
    topic: "LEFT JOIN",
    question: "Query DimReseller matched via LEFT JOIN against FactResellerSales to list all certified trade partners along with any active B2B sales data items fields tracking.",
    hint: "Preserve the master commercial reseller directory layout records completely using direct left side join instructions mappings properties.",
    concept: "Preservation of Master Records",
    answer: "SELECT r.ResellerName, f.SalesOrderNumber\nFROM DimReseller r\nLEFT JOIN FactResellerSales f ON r.ResellerKey = f.ResellerKey;"
  },
  {
    id: 236,
    level: "Intermediate",
    topic: "LEFT JOIN",
    question: "Extract all entries from DimPromotion alongside any tracking transactional traces out of FactInternetSales utilizing a robust LEFT JOIN mapping.",
    hint: "Examine campaign application metrics parameters while keeping track of zero-interaction promotional entries cleanly.",
    concept: "Preservation of Master Records",
    answer: "SELECT p.EnglishPromotionName, f.SalesOrderNumber\nFROM DimPromotion p\nLEFT JOIN FactInternetSales f ON p.PromotionKey = f.PromotionKey;"
  },
  {
    id: 237,
    level: "Intermediate",
    topic: "LEFT JOIN",
    question: "List all items within DimSalesTerritory alongside any corresponding tracking nodes from DimEmployee utilizing clear LEFT JOIN directives setups.",
    hint: "Identify administrative regions holding no active workforce personnel tracking vectors through safe left-side preservation approaches structures.",
    concept: "Preservation of Master Records",
    answer: "SELECT t.SalesTerritoryRegion, e.LastName\nFROM DimSalesTerritory t\nLEFT JOIN DimEmployee e ON t.SalesTerritoryKey = e.SalesTerritoryKey;"
  },
  {
    id: 238,
    level: "Intermediate",
    topic: "LEFT JOIN",
    question: "Query DimGeography mapped via LEFT JOIN into DimCustomer to expose regional locations alongside any matching consumer profile records files fields.",
    hint: "Trace geographic market penetration patterns retaining low-density residential sectors fields flawlessly via clear left join structures.",
    concept: "Preservation of Master Records",
    answer: "SELECT g.City, c.LastName\nFROM DimGeography g\nLEFT JOIN DimCustomer c ON g.GeographyKey = c.GeographyKey;"
  },
  {
    id: 239,
    level: "Intermediate",
    topic: "LEFT JOIN",
    question: "List all entries out of DimDepartmentGroup alongside any tracking data maps inside DimEmployee leveraging a safe LEFT JOIN structure path.",
    hint: "Keep track of corporate division assignments matrices completely while displaying unstaffed organizational business units fields safely.",
    concept: "Preservation of Master Records",
    answer: "SELECT d.DepartmentGroupName, e.LastName\nFROM DimDepartmentGroup d\nLEFT JOIN DimEmployee e ON d.DepartmentGroupKey = e.DepartmentGroupKey;"
  },
  {
    id: 240,
    level: "Intermediate",
    topic: "LEFT JOIN",
    question: "Associate DimOrganization through a LEFT JOIN directly into FactFinance to trace ledger entries tracking showing all internal organizations alongside any logged monetary amounts.",
    hint: "Retain inactive organizational units across corporate records pools utilizing smooth left structural validation scripts formulas.",
    concept: "Preservation of Master Records",
    answer: "SELECT o.OrganizationName, f.Amount\nFROM DimOrganization o\nLEFT JOIN FactFinance f ON o.OrganizationKey = f.OrganizationKey;"
  },
  {
    id: 241,
    level: "Intermediate",
    topic: "LEFT JOIN",
    question: "Query DimAccount matched via LEFT JOIN onto FactFinance to audit general accounts mapping showing all descriptions alongside matching ledger values.",
    hint: "Isolate unused structural chart accounts strings safely by configuring direct left structural mapping commands patterns lines.",
    concept: "Preservation of Master Records",
    answer: "SELECT a.AccountDescription, f.Amount\nFROM DimAccount a\nLEFT JOIN FactFinance f ON a.AccountKey = f.AccountKey;"
  },
  {
    id: 242,
    level: "Intermediate",
    topic: "LEFT JOIN",
    question: "Extract all records from DimCurrency connected via LEFT JOIN into FactInternetSales to see all available international currencies paired with active transaction numbers.",
    hint: "Identify currencies seeing zero operational traction fields elements paths safely via robust left preservation structures pipelines.",
    concept: "Preservation of Master Records",
    answer: "SELECT c.CurrencyName, f.SalesOrderNumber\nFROM DimCurrency c\nLEFT JOIN FactInternetSales f ON c.CurrencyKey = f.CurrencyKey;"
  },
  {
    id: 243,
    level: "Intermediate",
    topic: "LEFT JOIN",
    question: "List all items inside DimDate alongside any tracking records maps inside FactInternetSales across OrderDateKey pointers utilizing a comprehensive LEFT JOIN query.",
    hint: "Verify complete calendar timelines distributions grids parameters without dropping dates lacking consumer sales traffic fields allocations.",
    concept: "Preservation of Master Records",
    answer: "SELECT d.FullDateAlternateKey, f.SalesOrderNumber\nFROM DimDate d\nLEFT JOIN FactInternetSales f ON d.DateKey = f.OrderDateKey;"
  },
  {
    id: 244,
    level: "Intermediate",
    topic: "LEFT JOIN",
    question: "Query DimProduct Category components mapped via LEFT JOIN into DimProductSubcategory to show category metadata definitions paired with child segments data parameters metrics.",
    hint: "Deconstruct top-level taxonomic buckets structures cleanly while keeping empty high-level classifications tags visible fields fields.",
    concept: "Preservation of Master Records",
    answer: "SELECT c.EnglishProductCategoryName, s.EnglishProductSubcategoryName\nFROM DimProductCategory c\nLEFT JOIN DimProductSubcategory s ON c.ProductCategoryKey = s.ProductCategoryKey;"
  },
  {
    id: 245,
    level: "Intermediate",
    topic: "LEFT JOIN",
    question: "List all items inside DimSalesReason paired via LEFT JOIN into FactInternetSalesReason to check analytical justification models detailing all reasons alongside matching order keys tracking.",
    hint: "Audit underutilized operational business rationale tags fields completely through safe cross-table left integrity associations maps expressions.",
    concept: "Preservation of Master Records",
    answer: "SELECT r.SalesReasonName, h.SalesOrderNumber\nFROM DimSalesReason r\nLEFT JOIN FactInternetSalesReason h ON r.SalesReasonKey = h.SalesReasonKey;"
  },
  {
    id: 246,
    level: "Intermediate",
    topic: "LEFT JOIN",
    question: "Extract all tracking items inside DimScenario matched via LEFT JOIN into FactFinance records arrays.",
    hint: "Ensure total scenario structural visibility maps files fields utilizing standard clear left side relational join commands layouts profiles.",
    concept: "Preservation of Master Records",
    answer: "SELECT s.ScenarioName, f.Amount\nFROM DimScenario s\nLEFT JOIN FactFinance f ON s.ScenarioKey = f.ScenarioKey;"
  },
  {
    id: 247,
    level: "Intermediate",
    topic: "LEFT JOIN",
    question: "List all employees inside DimEmployee matched via LEFT JOIN into FactSalesQuota records matrices.",
    hint: "Isolate active personnel records holding no planned enterprise quota definitions parameters using straightforward left join tools structures.",
    concept: "Preservation of Master Records",
    answer: "SELECT e.LastName, q.SalesAmountQuota\nFROM DimEmployee e\nLEFT JOIN FactSalesQuota q ON e.EmployeeKey = q.EmployeeKey;"
  },
  {
    id: 248,
    level: "Intermediate",
    topic: "LEFT JOIN",
    question: "Query DimProduct items connected via LEFT JOIN into FactProductInventory allocations profiles data.",
    hint: "Identify material catalog lines currently unallocated across physical warehouse layers via pristine left structural connections setups formulas.",
    concept: "Preservation of Master Records",
    answer: "SELECT p.EnglishProductName, i.UnitsBalance\nFROM DimProduct p\nLEFT JOIN FactProductInventory i ON p.ProductKey = i.ProductKey;"
  },
  {
    id: 249,
    level: "Intermediate",
    topic: "LEFT JOIN",
    question: "List all geographical locations out of DimGeography connected via LEFT JOIN into DimReseller records indexes fields.",
    hint: "Trace international trade partner coverage density maps while safeguarding unrepresented regional nodes logs paths cleanly via left structural validation rules sets.",
    concept: "Preservation of Master Records",
    answer: "SELECT g.City, r.ResellerName\nFROM DimGeography g\nLEFT JOIN DimReseller r ON g.GeographyKey = r.GeographyKey;"
  },
  {
    id: 250,
    level: "Intermediate",
    topic: "LEFT JOIN",
    question: "Extract all entries out of DimEmployee paired via LEFT JOIN into FactCallCenter indicators arrays maps.",
    hint: "Identify administrative team members detached from operational machine center lines logs tracking variables cleanly using left alignments syntax architectures.",
    concept: "Preservation of Master Records",
    answer: "SELECT e.LastName, c.Calls\nFROM DimEmployee e\nLEFT JOIN FactCallCenter c ON e.EmployeeKey = c.EmployeeKey;"
  },
  {
    id: 251,
    level: "Intermediate",
    topic: "LEFT JOIN",
    question: "Find all products in DimProduct that have NEVER generated any retail sales by using a LEFT JOIN to FactInternetSales and filtering down where the transaction key evaluates to a NULL state.",
    hint: "Filter the structural output array of your LEFT JOIN configuration by applying an explicit WHERE clause checking for target system NULL states.",
    concept: "Exclusionary Left Joining",
    answer: "SELECT p.ProductKey, p.EnglishProductName\nFROM DimProduct p\nLEFT JOIN FactInternetSales f ON p.ProductKey = f.ProductKey\nWHERE f.ProductKey IS NULL;"
  },
  {
    id: 252,
    level: "Intermediate",
    topic: "LEFT JOIN",
    question: "Identify customer records inside DimCustomer who have completely zero transactions logged inside FactInternetSales using exclusionary LEFT JOIN checking metrics.",
    hint: "Isolate inactive account assets cleanly via standard left join filtering configurations targeting missing fact primary indices.",
    concept: "Exclusionary Left Joining",
    answer: "SELECT c.CustomerKey, c.LastName\nFROM DimCustomer c\nLEFT JOIN FactInternetSales f ON c.CustomerKey = f.CustomerKey\nWHERE f.CustomerKey IS NULL;"
  },
  {
    id: 253,
    level: "Intermediate",
    topic: "LEFT JOIN",
    question: "Find resellers within DimReseller who haven't filed any commercial business activities inside FactResellerSales using exclusionary LEFT JOIN constraints checking.",
    hint: "Trace sleeping distribution tracks channels parameters allocations fields filtering unassigned right hand variables tags safely.",
    concept: "Exclusionary Left Joining",
    answer: "SELECT r.ResellerKey, r.ResellerName\nFROM DimReseller r\nLEFT JOIN FactResellerSales f ON r.ResellerKey = f.ResellerKey\nWHERE f.ResellerKey IS NULL;"
  },
  {
    id: 254,
    level: "Intermediate",
    topic: "LEFT JOIN",
    question: "Locate promotions in DimPromotion that have achieved zero engagement metrics within FactInternetSales streams via exclusionary joins syntax mechanics.",
    hint: "Omit active campaigns maps matrices profiles from outputs by evaluating missing key references variables from overlapping data arrays.",
    concept: "Exclusionary Left Joining",
    answer: "SELECT p.PromotionKey, p.EnglishPromotionName\nFROM DimPromotion p\nLEFT JOIN FactInternetSales f ON p.PromotionKey = f.PromotionKey\nWHERE f.PromotionKey IS NULL;"
  },
  {
    id: 255,
    level: "Intermediate",
    topic: "LEFT JOIN",
    question: "Identify geographic records inside DimGeography containing zero consumer profiles documented inside DimCustomer directories files using exclusionary parameters checks.",
    hint: "Isolate untapped geographical marketing vectors layout blocks using strict empty associations constraints logic expressions.",
    concept: "Exclusionary Left Joining",
    answer: "SELECT g.GeographyKey, g.City\nFROM DimGeography g\nLEFT JOIN DimCustomer c ON g.GeographyKey = c.GeographyKey\nWHERE c.GeographyKey IS NULL;"
  },
  {
    id: 256,
    level: "Intermediate",
    topic: "LEFT JOIN",
    question: "Find products within DimProduct that have completely zero representation logs documented across FactProductInventory storage ledgers using exclusionary operations structures.",
    hint: "Isolate catalog entries unallocated across warehouse layers grids fields by tracking missing right keys maps configurations.",
    concept: "Exclusionary Left Joining",
    answer: "SELECT p.ProductKey, p.EnglishProductName\nFROM DimProduct p\nLEFT JOIN FactProductInventory i ON p.ProductKey = i.ProductKey\nWHERE i.ProductKey IS NULL;"
  },
  {
    id: 257,
    level: "Intermediate",
    topic: "LEFT JOIN",
    question: "Locate accounts in DimAccount that hold zero actual records logs mapped into FactFinance balance matrix logs fields using exclusionary connections filters.",
    hint: "Establish clean structural auditing templates tracking empty accounting nodes via clear missing indices filtering scripts formulas.",
    concept: "Exclusionary Left Joining",
    answer: "SELECT a.AccountKey, a.AccountDescription\nFROM DimAccount a\nLEFT JOIN FactFinance f ON a.AccountKey = f.AccountKey\nWHERE f.AccountKey IS NULL;"
  },
  {
    id: 258,
    level: "Intermediate",
    topic: "LEFT JOIN",
    question: "Identify employees within DimEmployee who are completely decoupled from active regional assignments inside DimSalesTerritory tracking arrays.",
    hint: "Review actual staff configurations data strings alignments parameters sorting out null foreign key nodes directly via exclusionary left checks models setups.",
    concept: "Exclusionary Left Joining",
    answer: "SELECT e.EmployeeKey, e.LastName\nFROM DimEmployee e\nLEFT JOIN DimSalesTerritory t ON e.SalesTerritoryKey = t.SalesTerritoryKey\nWHERE e.SalesTerritoryKey IS NULL;"
  },
  {
    id: 259,
    level: "Intermediate",
    topic: "LEFT JOIN",
    question: "Find clear taxonomic blocks inside DimProductCategory showing zero lower child distributions mappings records within DimProductSubcategory using exclusionary layouts.",
    hint: "Isolate redundant or empty top-tier classification buckets elements pools utilizing traditional left validation rules logic statements expressions.",
    concept: "Exclusionary Left Joining",
    answer: "SELECT c.ProductCategoryKey, c.EnglishProductCategoryName\nFROM DimProductCategory c\nLEFT JOIN DimProductSubcategory s ON c.ProductCategoryKey = s.ProductCategoryKey\nWHERE s.ProductCategoryKey IS NULL;"
  },
  {
    id: 260,
    level: "Intermediate",
    topic: "LEFT JOIN",
    question: "Locate strategic options handles within DimSalesReason containing zero historical validation footprints across FactInternetSalesReason tables matrices records fields.",
    hint: "Audit system trace tracking items parameters indicators profiles isolating unused tokens via simple right side index missing status checks profiles.",
    concept: "Exclusionary Left Joining",
    answer: "SELECT r.SalesReasonKey, r.SalesReasonName\nFROM DimSalesReason r\nLEFT JOIN FactInternetSalesReason h ON r.SalesReasonKey = h.SalesReasonKey\nWHERE h.SalesReasonKey IS NULL;"
  },

  // Set Interactions and Combinations (261 - 300)
  {
    id: 261,
    level: "Intermediate",
    topic: "Set Operations",
    question: "Merge unique instances of CustomerKey records captured within FactInternetSales together with CustomerKey rows populated inside FactResellerSales using a distinct UNION operation.",
    hint: "Leverage a clean structural UNION statement blocks configuration to join both transactional source records streams while dropping duplicating keys effortlessly.",
    concept: "Set Unification Deduplication",
    answer: "SELECT CustomerKey FROM FactInternetSales\nUNION\nSELECT CustomerKey FROM FactResellerSales;"
  },
  {
    id: 262,
    level: "Intermediate",
    topic: "Set Operations",
    question: "Consolidate all historical validation entries logs of ProductKey values tracked across FactInternetSales along with rows from FactResellerSales preserving absolute duplicative rows using UNION ALL.",
    hint: "Incorporate UNION ALL processing layout blueprints to keep full transaction volumes density metrics without executing automatic uniqueness processing workflows.",
    concept: "Set Unification Inclusionary",
    answer: "SELECT ProductKey FROM FactInternetSales\nUNION ALL\nSELECT ProductKey FROM FactResellerSales;"
  },
  {
    id: 263,
    level: "Intermediate",
    topic: "Set Operations",
    question: "Isolate CustomerKey entities that exist actively inside the FactInternetSales table stream data boundaries but are strictly missing from the FactResellerSales transactional registry using EXCEPT.",
    hint: "Apply the EXCEPT set difference operator syntax to perform relational cross-table dataset subtractions perfectly.",
    concept: "Set Difference Extraction",
    answer: "SELECT CustomerKey FROM FactInternetSales\nEXCEPT\nSELECT CustomerKey FROM FactResellerSales;"
  },
  {
    id: 264,
    level: "Intermediate",
    topic: "Set Operations",
    question: "Identify tracking indexes lines of ProductKey markers that are concurrently active across both FactInternetSales and FactResellerSales files layers systems maps via INTERSECT.",
    hint: "Implement the INTERSECT relational keyword operator signature to filter overlapping elements out of both primary dataset vectors.",
    concept: "Set Intersection Filtering",
    answer: "SELECT ProductKey FROM FactInternetSales\nINTERSECT\nSELECT ProductKey FROM FactResellerSales;"
  },
  {
    id: 265,
    level: "Intermediate",
    topic: "Set Operations",
    question: "Combine unique standard identifier codes under CurrencyKey tracked inside FactInternetSales with entries populated inside FactResellerSales using UNION filtering setups.",
    hint: "Consolidate active global trade currency frameworks properties records files fields removing standard duplication patterns cleanly.",
    concept: "Set Unification Deduplication",
    answer: "SELECT CurrencyKey FROM FactInternetSales\nUNION\nSELECT CurrencyKey FROM FactResellerSales;"
  },
  {
    id: 266,
    level: "Intermediate",
    topic: "Set Operations",
    question: "Extract all logged records rows of PromotionKey entries out of FactInternetSales merged comprehensively alongside items from FactResellerSales utilizing full inclusionary UNION ALL statements.",
    hint: "Stack marketing campaign applications data matrices indicators parameters flawless without performing sort or matching processes criteria checks.",
    concept: "Set Unification Inclusionary",
    answer: "SELECT PromotionKey FROM FactInternetSales\nUNION ALL\nSELECT PromotionKey FROM FactResellerSales;"
  },
  {
    id: 267,
    level: "Intermediate",
    topic: "Set Operations",
    question: "Isolate PromotionKey values applied inside retail transactions pipelines FactInternetSales that have completely zero use across wholesale operations FactResellerSales using EXCEPT structural mechanisms.",
    hint: "Determine campaign separation bounds patterns configurations profiles isolating consumer specific channels parameters via set exclusion scripts formulas.",
    concept: "Set Difference Extraction",
    answer: "SELECT PromotionKey FROM FactInternetSales\nEXCEPT\nSELECT PromotionKey FROM FactResellerSales;"
  },
  {
    id: 268,
    level: "Intermediate",
    topic: "Set Operations",
    question: "Isolate overlapping tracking maps records indicators of CurrencyKey attributes common across both B2C retail and B2B commercial fact tables streams via INTERSECT validation paths.",
    hint: "Isolate corporate transaction currency handles variables paths through regular cross table dataset identity matching evaluations algorithms.",
    concept: "Set Intersection Filtering",
    answer: "SELECT CurrencyKey FROM FactInternetSales\nINTERSECT\nSELECT CurrencyKey FROM FactResellerSales;"
  },
  {
    id: 269,
    level: "Intermediate",
    topic: "Set Operations",
    question: "Merge unique instances of SalesTerritoryKey rows documented within FactInternetSales tables together with entries from FactResellerSales datasets utilizing distinct set unification commands parameters.",
    hint: "Synthesize target market geographic indicators patterns omitting standard structural overlapping lines via clear UNION tools structures.",
    concept: "Set Unification Deduplication",
    answer: "SELECT SalesTerritoryKey FROM FactInternetSales\nUNION\nSELECT SalesTerritoryKey FROM FactResellerSales;"
  },
  {
    id: 270,
    level: "Intermediate",
    topic: "Set Operations",
    question: "Consolidate all historical records entries of SalesTerritoryKey values tracked inside retail fields along with wholesale logs preserving structural duplicates maps records fields via UNION ALL variables.",
    hint: "Stack regional marketing execution parameters flawless using traditional uncompressed relational grouping structures arrays pipelines fields.",
    concept: "Set Unification Inclusionary",
    answer: "SELECT SalesTerritoryKey FROM FactInternetSales\nUNION ALL\nSELECT SalesTerritoryKey FROM FactResellerSales;"
  },
  {
    id: 271,
    level: "Intermediate",
    topic: "Set Operations",
    question: "Isolate regional market tracking elements under SalesTerritoryKey active inside retail transactions layers but completely missing from commercial records sets via EXCEPT logic filters.",
    hint: "Uncover territory coverage exceptions paths files fields utilizing standard clear set subtraction commands layouts profiles.",
    concept: "Set Difference Extraction",
    answer: "SELECT SalesTerritoryKey FROM FactInternetSales\nEXCEPT\nSELECT SalesTerritoryKey FROM FactResellerSales;"
  },
  {
    id: 272,
    level: "Intermediate",
    topic: "Set Operations",
    question: "Identify strategic core regional boundaries nodes tracking common across both retail and reseller transaction arrays using a clear INTERSECT verification directive.",
    hint: "Establish cross-channel presence metrics patterns elements pools filtering intersecting metrics records using traditional database intersection tools.",
    concept: "Set Intersection Filtering",
    answer: "SELECT SalesTerritoryKey FROM FactInternetSales\nINTERSECT\nSELECT SalesTerritoryKey FROM FactResellerSales;"
  },
  {
    id: 273,
    level: "Intermediate",
    topic: "Set Operations",
    question: "Combine distinct historical validation timelines indicators under DateKey found within FactCallCenter alongside tracking entries stored in FactProductInventory archives using UNION setups formulas.",
    hint: "Consolidate disparate system timestamps markers profiles fields generating unified historical frameworks properties logs via structural unique additions scripts.",
    concept: "Set Unification Deduplication",
    answer: "SELECT DateKey FROM FactCallCenter\nUNION\nSELECT DateKey FROM FactProductInventory;"
  },
  {
    id: 274,
    level: "Intermediate",
    topic: "Set Operations",
    question: "Consolidate all system timestamps markers rows points out of FactCallCenter snapshots files stacked with records from FactProductInventory logs using inclusionary UNION ALL alignments syntax parameters.",
    hint: "Merge time tracking instances properties indicators across varying operational matrix lines logs fields without deduplication filtering loops arrays.",
    concept: "Set Unification Inclusionary",
    answer: "SELECT DateKey FROM FactCallCenter\nUNION ALL\nSELECT DateKey FROM FactProductInventory;"
  },
  {
    id: 275,
    level: "Intermediate",
    topic: "Set Operations",
    question: "Isolate snapshots chronological dates from FactCallCenter databases that are completely unpopulated across inventory balances logs inside FactProductInventory tables using EXCEPT profiles.",
    hint: "Identify staffing activity exceptions paths directly via fundamental dataset difference calculations instructions sets architectures configurations.",
    concept: "Set Difference Extraction",
    answer: "SELECT DateKey FROM FactCallCenter\nEXCEPT\nSELECT DateKey FROM FactProductInventory;"
  },
  {
    id: 276,
    level: "Intermediate",
    topic: "Set Operations",
    question: "Locate specific systemic operational tracking points under DateKey that overlap precisely across both FactCallCenter and FactProductInventory data repositories matrices using INTERSECT processing rules.",
    hint: "Isolate shared active business execution windows variables tracks across distinct backend machine logging domains through pristine intersection sets algorithms equations.",
    concept: "Set Intersection Filtering",
    answer: "SELECT DateKey FROM FactCallCenter\nINTERSECT\nSELECT DateKey FROM FactProductInventory;"
  },
  {
    id: 277,
    level: "Intermediate",
    topic: "Set Operations",
    question: "Combine unique transactional account metrics indicators under AccountKey from FactFinance charts rows with structural elements active inside FactAdditionalInternationalProductDescription files mappings. Note: Evaluate theoretical set logic compatibility over identical structural integer configurations across separate relational anchors boundaries.",
    hint: "Execute smooth conceptual identity mapping conversions over structural keys fields matching matching setups formulas.",
    concept: "Set Unification Deduplication",
    answer: "SELECT AccountKey FROM FactFinance\nUNION\nSELECT ProductKey FROM FactAdditionalInternationalProductDescription;"
  },
  {
    id: 278,
    level: "Intermediate",
    topic: "Set Operations",
    question: "Consolidate all logging entries lines points parameters tracking across FactFinance arrays stacked directly with rows out of FactAdditionalInternationalProductDescription files maps utilizing inclusionary UNION ALL structures definitions variables.",
    hint: "Aggregate absolute compound relational logs items fields metrics into single output screens lists using traditional raw set compilation mechanics profiles.",
    concept: "Set Unification Inclusionary",
    answer: "SELECT AccountKey FROM FactFinance\nUNION ALL\nSELECT ProductKey FROM FactAdditionalInternationalProductDescription;"
  },
  {
    id: 279,
    level: "Intermediate",
    topic: "Set Operations",
    question: "Subtract records rows tracking keys under AccountKey from FactFinance that carry completely zero identity intersections matching ProductKey values from FactAdditionalInternationalProductDescription layers using EXCEPT tools structures variables.",
    hint: "Filter unique code properties structures isolating specific backend indicators patterns using simple database exclusion operations scripts setups layouts.",
    concept: "Set Difference Extraction",
    answer: "SELECT AccountKey FROM FactFinance\nEXCEPT\nSELECT ProductKey FROM FactAdditionalInternationalProductDescription;"
  },
  {
    id: 280,
    level: "Intermediate",
    topic: "Set Operations",
    question: "Isolate overlapping identifier handles active concurrently inside both FactFinance ledgers arrays and FactAdditionalInternationalProductDescription tracking logs boundaries using an INTERSECT statement blueprint logic.",
    hint: "Trace rare systemic data element alignments parameters configurations profiles leveraging direct mathematical intersection validations configurations equations variables.",
    concept: "Set Intersection Filtering",
    answer: "SELECT AccountKey FROM FactFinance\nINTERSECT\nSELECT ProductKey FROM FactAdditionalInternationalProductDescription;"
  },
  {
    id: 281,
    level: "Advanced",
    topic: "CROSS JOIN",
    question: "Generate all possible combinations of DepartmentGroupName from DimDepartmentGroup and ScenarioName from DimScenario using a CROSS JOIN.",
    hint: "Apply a Cartesian product strategy using CROSS JOIN to generate every matrix intersection across dimensions.",
    concept: "Cartesian Product Generation",
    answer: "SELECT d.DepartmentGroupName, s.ScenarioName\nFROM DimDepartmentGroup d\nCROSS JOIN DimScenario s;"
  },
  {
    id: 282,
    level: "Advanced",
    topic: "CROSS JOIN",
    question: "Generate a complete evaluation matrix multiplying all unique instances of Color out of DimProduct with all SalesTerritoryCountry entries from DimSalesTerritory.",
    hint: "Execute a multi-column CROSS JOIN to map tactical catalog properties against international regional markets.",
    concept: "Analytical Grid Generation",
    answer: "SELECT DISTINCT p.Color, t.SalesTerritoryCountry\nFROM DimProduct p\nCROSS JOIN DimSalesTerritory t\nWHERE p.Color IS NOT NULL;"
  },
  {
    id: 283,
    level: "Advanced",
    topic: "CROSS JOIN",
    question: "Create a baseline framework matrix combining every unique AccountDescription inside DimAccount against every unique CalendarYear inside DimDate.",
    hint: "Construct a Cartesian projection to form structural accounting rows slots across financial tracking calendars data frames.",
    concept: "Analytical Grid Generation",
    answer: "SELECT DISTINCT a.AccountDescription, d.CalendarYear\nFROM DimAccount a\nCROSS JOIN DimDate d;"
  },
  {
    id: 284,
    level: "Advanced",
    topic: "CROSS JOIN",
    question: "Generate all permutations of BusinessType from DimReseller paired with EnglishPromotionType from DimPromotion using a CROSS JOIN structure.",
    hint: "Cross target distribution models against existing operational commercial frameworks configurations profiles cleanly.",
    concept: "Cartesian Product Generation",
    answer: "SELECT DISTINCT r.BusinessType, p.EnglishPromotionType\nFROM DimReseller r\nCROSS JOIN DimPromotion p\nWHERE r.BusinessType IS NOT NULL;"
  },
  {
    id: 285,
    level: "Advanced",
    topic: "CROSS JOIN",
    question: "Create a testing template matrix matching all EnglishProductCategoryName records within DimProductCategory directly against all CurrencyName options from DimCurrency.",
    hint: "Produce broad multi dimension structural options models setups for global validation arrays mapping via cross multi joins scripts.",
    concept: "Cartesian Product Generation",
    answer: "SELECT c.EnglishProductCategoryName, cur.CurrencyName\nFROM DimProductCategory c\nCROSS JOIN DimCurrency cur;"
  },
  {
    id: 286,
    level: "Advanced",
    topic: "CROSS JOIN",
    question: "Cross evaluate every unique Status value inside DimProduct with every unique EnglishEducation value inside DimCustomer.",
    hint: "Combine disjoint systemic indicator profiles with broad customer baseline demographics via clean cross evaluations parameters structures.",
    concept: "Analytical Grid Generation",
    answer: "SELECT DISTINCT p.Status, c.EnglishEducation\nFROM DimProduct p\nCROSS JOIN DimCustomer c\nWHERE p.Status IS NOT NULL;"
  },
  {
    id: 287,
    level: "Advanced",
    topic: "CROSS JOIN",
    question: "Multiply every unique MaritalStatus tracked inside DimEmployee across every unique SalesTerritoryGroup configured inside DimSalesTerritory.",
    hint: "Isolate worker behavioral characteristics targets grids paths against geographical structural administrative tiers flawlessly using cross processing layout scripts.",
    concept: "Cartesian Product Generation",
    answer: "SELECT DISTINCT e.MaritalStatus, t.SalesTerritoryGroup\nFROM DimEmployee e\nCROSS JOIN DimSalesTerritory t;"
  },
  {
    id: 288,
    level: "Advanced",
    topic: "CROSS JOIN",
    question: "Create a tracking matrix crossing all unique shift names under WageType within FactCallCenter against all unique EnglishDayNameOfWeek entries inside DimDate.",
    hint: "Deconstruct operational data rows timestamps logs fields into complete scheduling matrices mapping boundaries calculations allocations maps.",
    concept: "Analytical Grid Generation",
    answer: "SELECT DISTINCT c.Shift, d.EnglishDayNameOfWeek\nFROM FactCallCenter c\nCROSS JOIN DimDate d\nWHERE c.Shift IS NOT NULL;"
  },
  {
    id: 289,
    level: "Advanced",
    topic: "CROSS JOIN",
    question: "Generate an absolute testing array multiplying all OrganizationName tracks inside DimOrganization with all ScenarioName targets inside DimScenario.",
    hint: "Audit system configuration matrices variables fields cleanly via standard cross platform structural options evaluations equations parameters.",
    concept: "Cartesian Product Generation",
    answer: "SELECT o.OrganizationName, s.ScenarioName\nFROM DimOrganization o\nCROSS JOIN DimScenario s;"
  },
  {
    id: 290,
    level: "Advanced",
    topic: "CROSS JOIN",
    question: "Create a tracking matrix crossing all unique structural keys inside DimDepartmentGroup against all unique AccountType vectors inside DimAccount.",
    hint: "Establish unified operational financial ledger mapping matrices blueprints using basic cross joined master tables properties sorting rules sets.",
    concept: "Analytical Grid Generation",
    answer: "SELECT DISTINCT d.DepartmentGroupName, a.AccountType\nFROM DimDepartmentGroup d\nCROSS JOIN DimAccount a;"
  },
  {
    id: 291,
    level: "Advanced",
    topic: "CROSS JOIN",
    question: "Generate all possible combinations of PostalCode from DimGeography and CalendarQuarter from DimDate using a CROSS JOIN mapping template.",
    hint: "Deconstruct geographical points distributions parameters against cyclical temporal trends via direct cross platform verification models setups.",
    concept: "Cartesian Product Generation",
    answer: "SELECT DISTINCT g.PostalCode, d.CalendarQuarter\nFROM DimGeography g\nCROSS JOIN DimDate d\nWHERE g.PostalCode IS NOT NULL;"
  },
  {
    id: 292,
    level: "Advanced",
    topic: "CROSS JOIN",
    question: "Cross evaluate every unique CommuteDistance value inside DimCustomer with every unique ProductLine tracking flag configured inside DimReseller.",
    hint: "Examine divergent distribution data channels tracking indicators structures arrays maps safely using robust cross joining alignments syntax structures.",
    concept: "Analytical Grid Generation",
    answer: "SELECT DISTINCT c.CommuteDistance, r.ProductLine\nFROM DimCustomer c\nCROSS JOIN DimReseller r\nWHERE r.ProductLine IS NOT NULL;"
  },
  {
    id: 293,
    level: "Advanced",
    topic: "CROSS JOIN",
    question: "Create a baseline framework matrix combining every unique EnglishPromotionName inside DimPromotion against every unique City inside DimGeography.",
    hint: "Construct structural analytical grids paths mapping localized marketing application layers across standard geographical master profiles flawlessly.",
    concept: "Analytical Grid Generation",
    answer: "SELECT DISTINCT p.EnglishPromotionName, g.City\nFROM DimPromotion p\nCROSS JOIN DimGeography g;"
  },
  {
    id: 294,
    level: "Advanced",
    topic: "CROSS JOIN",
    question: "Generate all possible combinations of ModelName from DimProduct and EnglishEducation from DimCustomer using a CROSS JOIN pattern statement.",
    hint: "Synthesize large catalog properties benchmarks configurations against user qualification profiles tables matrices records fields using clear cross structural directives.",
    concept: "Cartesian Product Generation",
    answer: "SELECT DISTINCT p.ModelName, c.EnglishEducation\nFROM DimProduct p\nCROSS JOIN DimCustomer c\nWHERE p.ModelName IS NOT NULL;"
  },
  {
    id: 295,
    level: "Advanced",
    topic: "CROSS JOIN",
    question: "Create a testing matrix matching all unique Title choices inside DimEmployee directly against all alternative translation tracks from DimCurrency using a CROSS JOIN pipeline.",
    hint: "Produce broad structural options models evaluations parameters indicators grids fields utilizing clear cross platform join syntax parameters logic allocations.",
    concept: "Cartesian Product Generation",
    answer: "SELECT DISTINCT e.Title, c.CurrencyName\nFROM DimEmployee e\nCROSS JOIN DimCurrency c\nWHERE e.Title IS NOT NULL;"
  },
  {
    id: 296,
    level: "Advanced",
    topic: "CROSS JOIN",
    question: "Generate an absolute cross joined evaluation matrix detailing all variations between CultureName from FactAdditionalInternationalProductDescription and ScenarioName from DimScenario.",
    hint: "Map tracking localization features variables indicators arrays profiles against planned systemic target states using standard structural cartesian options operations.",
    concept: "Analytical Grid Generation",
    answer: "SELECT DISTINCT c.CultureName, s.ScenarioName\nFROM FactAdditionalInternationalProductDescription c\nCROSS JOIN DimScenario s;"
  },
  {
    id: 297,
    level: "Advanced",
    topic: "CROSS JOIN",
    question: "Create a tracking matrix crossing all unique structural keys inside DimDepartmentGroup against all unique dynamic region tracking names from DimSalesTerritory.",
    hint: "Isolate planning structures metrics allocations across regional administrative layout options files fields utilizing precise database cross unification workflows grids.",
    concept: "Analytical Grid Generation",
    answer: "SELECT d.DepartmentGroupName, t.SalesTerritoryRegion\nFROM DimDepartmentGroup d\nCROSS JOIN DimSalesTerritory t;"
  },
  {
    id: 298,
    level: "Advanced",
    topic: "CROSS JOIN",
    question: "Cross-evaluate every unique HouseOwnerFlag value inside DimCustomer with every unique Class tracking flag configured inside DimProduct.",
    hint: "Examine demographic lifestyle distributions datasets against material categorization schemas records matrices flawlessly via clear cross joined execution layouts blueprints.",
    concept: "Analytical Grid Generation",
    answer: "SELECT DISTINCT c.HouseOwnerFlag, p.Class\nFROM DimCustomer c\nCROSS JOIN DimProduct p\nWHERE p.Class IS NOT NULL;"
  },
  {
    id: 299,
    level: "Advanced",
    topic: "CROSS JOIN",
    question: "Create a tracking matrix crossing all unique structural names inside DimOrganization against all unique dynamic currency shortcut markers from DimCurrency using a CROSS JOIN.",
    hint: "Establish baseline international bookkeeping indices parameters indicators profiles fields isolating multi dimension matrix points via clean cross-table structural assignments schemas structures.",
    concept: "Cartesian Product Generation",
    answer: "SELECT o.OrganizationName, c.CurrencyAlternateKey\nFROM DimOrganization o\nCROSS JOIN DimCurrency c;"
  },
  {
    id: 300,
    level: "Advanced",
    topic: "CROSS JOIN",
    question: "Generate all possible combinations of SalesReasonName from DimSalesReason and CalendarQuarter from DimDate using a CROSS JOIN pattern statement strategy configuration.",
    hint: "Deconstruct transactional motivation indicators profiles against cyclical historical tracking frameworks tables matrices records fields parameters cleanly using standard cross structural parameters validation commands logic.",
    concept: "Cartesian Product Generation",
    answer: "SELECT r.SalesReasonName, d.CalendarQuarter\nFROM DimSalesReason r\nCROSS JOIN DimDate d;"
  },
{
    id: 301,
    level: "Intermediate",
    topic: "GROUP BY & HAVING",
    question: "Find the total SalesAmount and total TaxAmt for each ProductKey in FactInternetSales, but only return products where the total tax exceeds $1,000.",
    hint: "Group by ProductKey and use HAVING SUM(TaxAmt) > 1000.",
    concept: "Aggregated filtering with HAVING",
    answer: "SELECT ProductKey, SUM(SalesAmount) AS TotalSales, SUM(TaxAmt) AS TotalTax\nFROM FactInternetSales\nGROUP BY ProductKey\nHAVING SUM(TaxAmt) > 1000;"
  },
  {
    id: 302,
    level: "Intermediate",
    topic: "GROUP BY & HAVING",
    question: "Identify the CustomerKeys that have placed more than 10 orders in FactInternetSales.",
    hint: "Group by CustomerKey and filter groups using COUNT(SalesOrderNumber) > 10.",
    concept: "Group matching with count thresholds",
    answer: "SELECT CustomerKey, COUNT(DISTINCT SalesOrderNumber) AS OrderCount\nFROM FactInternetSales\nGROUP BY CustomerKey\nHAVING COUNT(DISTINCT SalesOrderNumber) > 10;"
  },
  {
    id: 303,
    level: "Intermediate",
    topic: "GROUP BY & HAVING",
    question: "Calculate the average OrderQuantity per product category from FactResellerSales joined with DimProduct and DimProductSubcategory.",
    hint: "Perform inner joins across the product dimensions, group by the EnglishProductCategoryName, and use AVG(OrderQuantity).",
    concept: "Multi-table aggregation paths",
    answer: "SELECT c.EnglishProductCategoryName, AVG(f.OrderQuantity) AS AvgOrderQty\nFROM FactResellerSales f\nINNER JOIN DimProduct p ON f.ProductKey = p.ProductKey\nINNER JOIN DimProductSubcategory s ON p.ProductSubcategoryKey = s.ProductSubcategoryKey\nINNER JOIN DimProductCategory c ON s.ProductCategoryKey = c.ProductCategoryKey\nGROUP BY c.EnglishProductCategoryName;"
  },
  {
    id: 304,
    level: "Intermediate",
    topic: "GROUP BY & HAVING",
    question: "List the combinations of CalendarYear and MonthNumberOfYear from DimDate where total SalesAmount in FactInternetSales exceeds $500,000.",
    hint: "Join FactInternetSales to DimDate on OrderDateKey, group by CalendarYear and MonthNumberOfYear, and filter via HAVING.",
    concept: "Chronological composite grouping",
    answer: "SELECT d.CalendarYear, d.MonthNumberOfYear, SUM(f.SalesAmount) AS TotalSales\nFROM FactInternetSales f\nINNER JOIN DimDate d ON f.OrderDateKey = d.DateKey\nGROUP BY d.CalendarYear, d.MonthNumberOfYear\nHAVING SUM(f.SalesAmount) > 500000;"
  },
  {
    id: 305,
    level: "Intermediate",
    topic: "GROUP BY & HAVING",
    question: "Find all SalesTerritoryKey values in FactResellerSales whose average SalesAmount per transaction is greater than $5,000.",
    hint: "Group by SalesTerritoryKey and filter with HAVING AVG(SalesAmount) > 5000.",
    concept: "Average scale group thresholding",
    answer: "SELECT SalesTerritoryKey, AVG(SalesAmount) AS AvgSales\nFROM FactResellerSales\nGROUP BY SalesTerritoryKey\nHAVING AVG(SalesAmount) > 5000;"
  },
  {
    id: 306,
    level: "Intermediate",
    topic: "GROUP BY & HAVING",
    question: "Retrieve the ProductKey and total OrderQuantity from FactProductInventory grouped by ProductKey where the total minimum balance across all bins drops below 10 units.",
    hint: "Group by ProductKey and filter using HAVING MIN(UnitsBalance) < 10.",
    concept: "Inventory baseline isolation",
    answer: "SELECT ProductKey, SUM(UnitsBalance) AS CurrentInventory\nFROM FactProductInventory\nGROUP BY ProductKey\nHAVING MIN(UnitsBalance) < 10;"
  },
  {
    id: 307,
    level: "Intermediate",
    topic: "GROUP BY & HAVING",
    question: "Find the total number of employees assigned to each SalesTerritoryKey in DimEmployee, excluding records where territory is unassigned, and only showing territories with more than 3 employees.",
    hint: "Filter out NULL values with WHERE, group by SalesTerritoryKey, and apply HAVING COUNT(*) > 3.",
    concept: "Socio-demographic workforce density",
    answer: "SELECT SalesTerritoryKey, COUNT(*) AS EmployeeCount\nFROM DimEmployee\nWHERE SalesTerritoryKey IS NOT NULL\nGROUP BY SalesTerritoryKey\nHAVING COUNT(*) > 3;"
  },
  {
    id: 308,
    level: "Intermediate",
    topic: "GROUP BY & HAVING",
    question: "Calculate total monetary Amount in FactFinance grouped by AccountKey and ScenarioKey, showing only configurations where total Amount is between $10,000 and $100,000.",
    hint: "Group by both attributes and use HAVING SUM(Amount) BETWEEN 10000 AND 100000.",
    concept: "Composite ledger value bracket checks",
    answer: "SELECT AccountKey, ScenarioKey, SUM(Amount) AS TotalAmount\nFROM FactFinance\nGROUP BY AccountKey, ScenarioKey\nHAVING SUM(Amount) BETWEEN 10000 AND 100000;"
  },
  {
    id: 309,
    level: "Intermediate",
    topic: "GROUP BY & HAVING",
    question: "Find the maximum physical Weight for each Color category in DimProduct, displaying only colors containing items whose maximum weight surpasses 50 units.",
    hint: "Filter out NULL colors, group by Color, and use HAVING MAX(Weight) > 50.",
    concept: "Physical catalog attributes filters",
    answer: "SELECT Color, MAX(Weight) AS MaxWeight\nFROM DimProduct\nWHERE Color IS NOT NULL\nGROUP BY Color\nHAVING MAX(Weight) > 50;"
  },
  {
    id: 310,
    level: "Intermediate",
    topic: "GROUP BY & HAVING",
    question: "Identify the PromotionKeys in FactInternetSales that have been used in more than 500 distinct order lines.",
    hint: "Group by PromotionKey and evaluate via HAVING COUNT(*) > 500.",
    concept: "Marketing engagement tracking",
    answer: "SELECT PromotionKey, COUNT(*) AS TransactionCount\nFROM FactInternetSales\nGROUP BY PromotionKey\nHAVING COUNT(*) > 500;"
  },
  {
    id: 311,
    level: "Intermediate",
    topic: "GROUP BY & HAVING",
    question: "List each unique EnglishOccupation in DimCustomer paired with the total count of customers matching that background, where the customer density exceeds 2,000 individuals.",
    hint: "Group by EnglishOccupation and apply HAVING COUNT(*) > 2000.",
    concept: "Demographic concentration analytics",
    answer: "SELECT EnglishOccupation, COUNT(*) AS TotalCustomers\nFROM DimCustomer\nGROUP BY EnglishOccupation\nHAVING COUNT(*) > 2000;"
  },
  {
    id: 312,
    level: "Intermediate",
    topic: "GROUP BY & HAVING",
    question: "Find the total Freight collected per CurrencyKey in FactInternetSales where the maximum single freight amount inside that currency group exceeds $200.",
    hint: "Group by CurrencyKey and use HAVING MAX(Freight) > 200.",
    concept: "Logistics boundary mapping",
    answer: "SELECT CurrencyKey, SUM(Freight) AS TotalFreight\nFROM FactInternetSales\nGROUP BY CurrencyKey\nHAVING MAX(Freight) > 200;"
  },
  {
    id: 313,
    level: "Intermediate",
    topic: "GROUP BY & HAVING",
    question: "Retrieve each unique DepartmentName in DimEmployee along with the average VacationHours, showing only departments where the average worker time exceeds 60 hours.",
    hint: "Group by DepartmentName and filter using HAVING AVG(VacationHours) > 60.",
    concept: "Human capital balance analytics",
    answer: "SELECT DepartmentName, AVG(VacationHours) AS AvgVacationHours\nFROM DimEmployee\nGROUP BY DepartmentName\nHAVING AVG(VacationHours) > 60;"
  },
  {
    id: 314,
    level: "Intermediate",
    topic: "GROUP BY & HAVING",
    question: "Identify the ProductSubcategoryKey values in DimProduct that have a count of distinct product records greater than 15.",
    hint: "Group by ProductSubcategoryKey and filter with HAVING COUNT(*) > 15.",
    concept: "Taxonomic density measurement",
    answer: "SELECT ProductSubcategoryKey, COUNT(*) AS ProductCount\nFROM DimProduct\nWHERE ProductSubcategoryKey IS NOT NULL\nGROUP BY ProductSubcategoryKey\nHAVING COUNT(*) > 15;"
  },
  {
    id: 315,
    level: "Intermediate",
    topic: "GROUP BY & HAVING",
    question: "Find the total SalesAmount collected per ResellerKey in FactResellerSales, displaying only vendors whose cumulative total is greater than $50,000.",
    hint: "Group by ResellerKey and use HAVING SUM(SalesAmount) > 50000.",
    concept: "Wholesale account volume evaluation",
    answer: "SELECT ResellerKey, SUM(SalesAmount) AS CumulativeSales\nFROM FactResellerSales\nGROUP BY ResellerKey\nHAVING SUM(SalesAmount) > 50000;"
  },
  {
    id: 316,
    level: "Intermediate",
    topic: "GROUP BY & HAVING",
    question: "Group the FactCallCenter records by Shift and display only those shifts where the total number of AbandonedCalls exceeds 100 across the entire timeline.",
    hint: "Group by Shift and apply HAVING SUM(AbandonedCalls) > 100.",
    concept: "Operational optimization checkpoint",
    answer: "SELECT Shift, SUM(AbandonedCalls) AS TotalAbandoned\nFROM FactCallCenter\nGROUP BY Shift\nHAVING SUM(AbandonedCalls) > 100;"
  },
  {
    id: 317,
    level: "Intermediate",
    topic: "GROUP BY & HAVING",
    question: "Find the average SalesAmountQuota per EmployeeKey in FactSalesQuota, showing only personnel whose average target matches or exceeds $200,000.",
    hint: "Group by EmployeeKey and evaluate via HAVING AVG(SalesAmountQuota) >= 200000.",
    concept: "Forecasting performance metrics filtering",
    answer: "SELECT EmployeeKey, AVG(SalesAmountQuota) AS AvgQuota\nFROM FactSalesQuota\nGROUP BY EmployeeKey\nHAVING AVG(SalesAmountQuota) >= 200000;"
  },
  {
    id: 318,
    level: "Intermediate",
    topic: "GROUP BY & HAVING",
    question: "List each unique GeographyKey inside DimCustomer that has more than 50 homeowners associated with it.",
    hint: "Filter WHERE HouseOwnerFlag = '1', group by GeographyKey, and use HAVING COUNT(*) > 50.",
    concept: "Socio-economic regional density",
    answer: "SELECT GeographyKey, COUNT(*) AS HomeownerCount\nFROM DimCustomer\nWHERE HouseOwnerFlag = '1'\nGROUP BY GeographyKey\nHAVING COUNT(*) > 50;"
  },
  {
    id: 319,
    level: "Intermediate",
    topic: "GROUP BY & HAVING",
    question: "Find the total aggregate SalesAmount grouped by both CustomerKey and PromotionKey in FactInternetSales, where the count of items in the group is exactly 1.",
    hint: "Group by both keys and apply HAVING COUNT(*) = 1.",
    concept: "Multi-attribute structural singularity checks",
    answer: "SELECT CustomerKey, PromotionKey, SUM(SalesAmount) AS TotalSales\nFROM FactInternetSales\nGROUP BY CustomerKey, PromotionKey\nHAVING COUNT(*) = 1;"
  },
  {
    id: 320,
    level: "Intermediate",
    topic: "GROUP BY & HAVING",
    question: "Identify the unique PostalCode strings inside DimGeography that map to more than 5 distinct City definitions.",
    hint: "Group by PostalCode and use HAVING COUNT(DISTINCT City) > 5.",
    concept: "Structural metadata anomalies detection",
    answer: "SELECT PostalCode, COUNT(DISTINCT City) AS CityCount\nFROM DimGeography\nGROUP BY PostalCode\nHAVING COUNT(DISTINCT City) > 5;"
  },
  {
    id: 321,
    level: "Intermediate",
    topic: "GROUP BY & HAVING",
    question: "Calculate the total quantity of material items ordered from FactInternetSales grouped by ProductKey, showing only products whose total order quantity falls below 50 units.",
    hint: "Group by ProductKey and filter via HAVING SUM(OrderQuantity) < 50.",
    concept: "Low velocity retail material traces",
    answer: "SELECT ProductKey, SUM(OrderQuantity) AS TotalQty\nFROM FactInternetSales\nGROUP BY ProductKey\nHAVING SUM(OrderQuantity) < 50;"
  },
  {
    id: 322,
    level: "Intermediate",
    topic: "GROUP BY & HAVING",
    question: "Find the total corporate expenditures logged inside FactFinance grouped by OrganizationKey where the standard variance across entry lines shows a maximum Amount greater than $1,000,000.",
    hint: "Group by OrganizationKey and filter via HAVING MAX(Amount) > 1000000.",
    concept: "Subsidiary balance metrics verification",
    answer: "SELECT OrganizationKey, SUM(Amount) AS TotalExpenditure\nFROM FactFinance\nGROUP BY OrganizationKey\nHAVING MAX(Amount) > 1000000;"
  },
  {
    id: 323,
    level: "Intermediate",
    topic: "GROUP BY & HAVING",
    question: "Group DimReseller nodes by BankName and return clusters where the total combined count of reseller stores exceeds 10 entities.",
    hint: "Group by BankName and apply HAVING COUNT(*) > 10.",
    concept: "Commercial ecosystem layout evaluation",
    answer: "SELECT BankName, COUNT(*) AS ResellerCount\nFROM DimReseller\nWHERE BankName IS NOT NULL\nGROUP BY BankName\nHAVING COUNT(*) > 10;"
  },
  {
    id: 324,
    level: "Intermediate",
    topic: "GROUP BY & HAVING",
    question: "Identify the combinations of ProductKey and DateKey inside FactProductInventory where the average UnitCost surpasses $500 across more than 3 logged records.",
    hint: "Group by both attributes and use HAVING AVG(UnitCost) > 500 AND COUNT(*) > 3.",
    concept: "Asset financial impact tracking",
    answer: "SELECT ProductKey, DateKey, AVG(UnitCost) AS HighAvgCost\nFROM FactProductInventory\nGROUP BY ProductKey, DateKey\nHAVING AVG(UnitCost) > 500 AND COUNT(*) > 3;"
  },
  {
    id: 325,
    level: "Intermediate",
    topic: "GROUP BY & HAVING",
    question: "List each unique Title within DimEmployee along with the minimum SickLeaveHours tracked, showing only groups where the minimum sick time is greater than 10 hours.",
    hint: "Group by Title and apply HAVING MIN(SickLeaveHours) > 10.",
    concept: "Human capital health distributions checks",
    answer: "SELECT Title, MIN(SickLeaveHours) AS MinSickLeave\nFROM DimEmployee\nGROUP BY Title\nHAVING MIN(SickLeaveHours) > 10;"
  },
  {
    id: 326,
    level: "Intermediate",
    topic: "GROUP BY & HAVING",
    question: "Find the total aggregate SalesAmount in FactInternetSales for each Year value derived from OrderDateKey, showing only years whose total sums exceed $1,000,000.",
    hint: "Group by LEFT(OrderDateKey, 4) or use date math, and apply HAVING on the aggregated sum.",
    concept: "Macro chronological revenue checkpoints",
    answer: "SELECT LEFT(OrderDateKey, 4) AS YearLabel, SUM(SalesAmount) AS YearlyTotal\nFROM FactInternetSales\nGROUP BY LEFT(OrderDateKey, 4)\nHAVING SUM(SalesAmount) > 1000000;"
  },
  {
    id: 327,
    level: "Intermediate",
    topic: "GROUP BY & HAVING",
    question: "Identify the unique ProductSubcategoryKeys from DimProduct where the minimum ListPrice within that group is strictly greater than $0.",
    hint: "Group by ProductSubcategoryKey and filter groups using HAVING MIN(ListPrice) > 0.",
    concept: "Monetized taxonomic catalog lines verification",
    answer: "SELECT ProductSubcategoryKey, MIN(ListPrice) AS MinPrice\nFROM DimProduct\nWHERE ProductSubcategoryKey IS NOT NULL\nGROUP BY ProductSubcategoryKey\nHAVING MIN(ListPrice) > 0;"
  },
  {
    id: 328,
    level: "Intermediate",
    topic: "GROUP BY & HAVING",
    question: "Find the total number of distinct products sold per SalesTerritoryKey in FactResellerSales, displaying only territories handling over 100 unique products.",
    hint: "Group by SalesTerritoryKey and evaluate via HAVING COUNT(DISTINCT ProductKey) > 100.",
    concept: "Regional product distribution density maps",
    answer: "SELECT SalesTerritoryKey, COUNT(DISTINCT ProductKey) AS UniqueProducts\nFROM FactResellerSales\nGROUP BY SalesTerritoryKey\nHAVING COUNT(DISTINCT ProductKey) > 100;"
  },
  {
    id: 329,
    level: "Intermediate",
    topic: "GROUP BY & HAVING",
    question: "Determine unique AccountKeys within FactFinance that register more than 50 transactional ledger entry rows across any timeline configuration.",
    hint: "Group by AccountKey and apply HAVING COUNT(*) > 50.",
    concept: "Ledger transaction volume density profiles",
    answer: "SELECT AccountKey, COUNT(*) AS EntryCount\nFROM FactFinance\nGROUP BY AccountKey\nHAVING COUNT(*) > 50;"
  },
  {
    id: 330,
    level: "Intermediate",
    topic: "GROUP BY & HAVING",
    question: "List each unique CommuteDistance category in DimCustomer alongside total customer counts, keeping only groups with more than 500 customers.",
    hint: "Group by CommuteDistance and use HAVING COUNT(*) > 500.",
    concept: "Socio-demographic metric segmentation",
    answer: "SELECT CommuteDistance, COUNT(*) AS TotalCount\nFROM DimCustomer\nWHERE CommuteDistance IS NOT NULL\nGROUP BY CommuteDistance\nHAVING COUNT(*) > 500;"
  },

  // Advanced String & Date Functions (331 - 360)
  {
    id: 331,
    level: "Intermediate",
    topic: "String & Date Functions",
    question: "Extract the domain name from the EmailAddress field in DimCustomer (all characters following the '@' delimiter symbol).",
    hint: "Use SUBSTRING combined with CHARINDEX('@', EmailAddress) + 1 and LEN(EmailAddress).",
    concept: "Advanced textual parsing mechanics",
    answer: "SELECT EmailAddress, SUBSTRING(EmailAddress, CHARINDEX('@', EmailAddress) + 1, LEN(EmailAddress)) AS EmailDomain\nFROM DimCustomer\nWHERE EmailAddress IS NOT NULL;"
  },
  {
    id: 332,
    level: "Intermediate",
    topic: "String & Date Functions",
    question: "Format the BirthDate column in DimEmployee into a string matching the literal text pattern 'Month Name, Day, Year' (e.g., 'March 15, 1975') using FORMAT.",
    hint: "Leverage FORMAT(BirthDate, 'MMMM dd, yyyy') for localized string translation pipelines.",
    concept: "Localized mask formatting",
    answer: "SELECT FirstName, LastName, FORMAT(BirthDate, 'MMMM dd, yyyy') AS FormattedBirthDate\nFROM DimEmployee;"
  },
  {
    id: 333,
    level: "Intermediate",
    topic: "String & Date Functions",
    question: "Calculate the absolute age of employees in completed years on the exact date they were hired in DimEmployee.",
    hint: "Use DATEDIFF(YEAR, BirthDate, HireDate) and subtract 1 if the birth month/day hasn't passed.",
    concept: "Chronological delta compounding",
    answer: "SELECT FirstName, LastName, DATEDIFF(YEAR, BirthDate, HireDate) - \n  CASE WHEN MONTH(BirthDate) > MONTH(HireDate) OR (MONTH(BirthDate) = MONTH(HireDate) AND DAY(BirthDate) > DAY(HireDate)) THEN 1 ELSE 0 END AS AgeAtHire\nFROM DimEmployee;"
  },
  {
    id: 334,
    level: "Intermediate",
    topic: "String & Date Functions",
    question: "Construct a custom ProductCode string by taking the first 2 characters of EnglishProductName, appending a hyphen, and then appending the RIGHT 4 characters of ProductAlternateKey.",
    hint: "Combine LEFT(EnglishProductName, 2), '-', and RIGHT(ProductAlternateKey, 4) using the concatenation operator.",
    concept: "Dynamic key compounding and sanitization",
    answer: "SELECT EnglishProductName, ProductAlternateKey, LEFT(EnglishProductName, 2) + '-' + RIGHT(ProductAlternateKey, 4) AS CustomProductCode\nFROM DimProduct;"
  },
  {
    id: 335,
    level: "Intermediate",
    topic: "String & Date Functions",
    question: "Find the total number of orders in FactInternetSales that were placed on the exact final calendar day of any given month.",
    hint: "Join with DimDate and check if FullDateAlternateKey is equal to EOMONTH(FullDateAlternateKey).",
    concept: "Cyclical cutoff timeline validation",
    answer: "SELECT COUNT(*) AS LastDayOrders\nFROM FactInternetSales f\nINNER JOIN DimDate d ON f.OrderDateKey = d.DateKey\nWHERE d.FullDateAlternateKey = EOMONTH(d.FullDateAlternateKey);"
  },
  {
    id: 336,
    level: "Intermediate",
    topic: "String & Date Functions",
    question: "Isolate the first space-separated word from the AddressLine1 column inside DimCustomer profiles.",
    hint: "Use SUBSTRING and CHARINDEX(' ', AddressLine1) to locate the initial boundary split point.",
    concept: "Substring token scanning",
    answer: "SELECT AddressLine1, SUBSTRING(AddressLine1, 1, IIF(CHARINDEX(' ', AddressLine1) > 0, CHARINDEX(' ', AddressLine1) - 1, LEN(AddressLine1))) AS StreetNumber\nFROM DimCustomer;"
  },
  {
    id: 337,
    level: "Intermediate",
    topic: "String & Date Functions",
    question: "Determine the day of the week text label name (e.g., 'Monday') for the historical parameter StartDate inside DimPromotion using DATENAME.",
    hint: "Apply DATENAME(WEEKDAY, StartDate) within your selection projection fields.",
    concept: "Granular calendar attribute translation",
    answer: "SELECT EnglishPromotionName, DATENAME(WEEKDAY, StartDate) AS StartDayOfWeek\nFROM DimPromotion;"
  },
  {
    id: 338,
    level: "Intermediate",
    topic: "String & Date Functions",
    question: "Find all customer accounts in DimCustomer where the character length tracking scale of the primary LastName exceeds 12 characters.",
    hint: "Apply LEN(LastName) > 12 inside the operational WHERE filter constraint.",
    concept: "String length parameter assessment",
    answer: "SELECT CustomerKey, FirstName, LastName\nFROM DimCustomer\nWHERE LEN(LastName) > 12;"
  },
  {
    id: 339,
    level: "Intermediate",
    topic: "String & Date Functions",
    question: "Replace all occurrences of internal structural slash characters '/' inside the primary ModelName field strings across DimProduct lines with double dashes '--'.",
    hint: "Incorporate REPLACE(ModelName, '/', '--') targeting catalog cleanups.",
    concept: "Character substitution logic profiles",
    answer: "SELECT ModelName, REPLACE(ModelName, '/', '--') AS CleanedModelName\nFROM DimProduct\nWHERE ModelName IS NOT NULL;"
  },
  {
    id: 340,
    level: "Intermediate",
    topic: "String & Date Functions",
    question: "Calculate the total dynamic count of months elapsed separating the EndDate from StartDate across DimPromotion active campaign variables.",
    hint: "Execute smooth temporal comparisons utilizing DATEDIFF(MONTH, StartDate, EndDate).",
    concept: "Chronological delta tracking",
    answer: "SELECT EnglishPromotionName, DATEDIFF(MONTH, StartDate, EndDate) AS CampaignDurationMonths\nFROM DimPromotion\nWHERE StartDate IS NOT NULL AND EndDate IS NOT NULL;"
  },
  {
    id: 341,
    level: "Intermediate",
    topic: "String & Date Functions",
    question: "Locate the explicit starting integer position of the character substring segment 'Silver' inside EnglishProductName within DimProduct.",
    hint: "Leverage CHARINDEX('Silver', EnglishProductName) to establish structural search offsets.",
    concept: "Target pattern offset identification",
    answer: "SELECT ProductKey, EnglishProductName, CHARINDEX('Silver', EnglishProductName) AS PatternOffset\nFROM DimProduct\nWHERE EnglishProductName LIKE '%Silver%';"
  },
  {
    id: 342,
    level: "Intermediate",
    topic: "String & Date Functions",
    question: "Convert the numerical integer key OrderDateKey (formatted as $YYYYMMDD$) from FactInternetSales directly into a standard DATETIME object structure.",
    hint: "Construct a conversion layer string via CAST/CONVERT using style 112 tracking maps.",
    concept: "Datatype transformation mechanics",
    answer: "SELECT DISTINCT OrderDateKey, CONVERT(DATETIME, CAST(OrderDateKey AS VARCHAR(8)), 112) AS StandardOrderDate\nFROM FactInternetSales;"
  },
  {
    id: 343,
    level: "Intermediate",
    topic: "String & Date Functions",
    question: "Find the total quantity of reseller transactions inside FactResellerSales occurring strictly during the final quarter of any calendar framework year.",
    hint: "Join with DimDate and apply WHERE CalendarQuarter = 4 filtering tools.",
    concept: "Cyclical tracking metric alignment",
    answer: "SELECT COUNT(*) AS Q4TransactionVolume\nFROM FactResellerSales f\nINNER JOIN DimDate d ON f.OrderDateKey = d.DateKey\nWHERE d.CalendarQuarter = 4;"
  },
  {
    id: 344,
    level: "Intermediate",
    topic: "String & Date Functions",
    question: "Generate an absolute reversed text sequence string from the Title attribute mapping column across DimEmployee personnel configurations.",
    hint: "Apply the REVERSE(Title) database scalar calculation function within your query blocks.",
    concept: "Dynamic text inversion models",
    answer: "SELECT EmployeeKey, Title, REVERSE(Title) AS InvertedTitle\nFROM DimEmployee\nWHERE Title IS NOT NULL;"
  },
  {
    id: 345,
    level: "Intermediate",
    topic: "String & Date Functions",
    question: "Determine the first calendar day of the month for each HireDate entry within DimEmployee utilizing standard date math frameworks.",
    hint: "Subtract the day component minus 1 from the original timestamp or use DATEADD/DATEDIFF paths.",
    concept: "Chronological baseline anchor processing",
    answer: "SELECT FirstName, LastName, HireDate, DATEADD(MONTH, DATEDIFF(MONTH, 0, HireDate), 0) AS MonthStartAnchor\nFROM DimEmployee;"
  },
  {
    id: 346,
    level: "Intermediate",
    topic: "String & Date Functions",
    question: "Trim out all leading and trailing empty whitespace anomalies from MiddleName fields across DimCustomer demographics rows.",
    hint: "Combine LTRIM and RTRIM functions into a unified nested validation pipeline expression.",
    concept: "String whitespace cleansing templates",
    answer: "SELECT FirstName, LTRIM(RTRIM(MiddleName)) AS CleanedMiddleName, LastName\nFROM DimCustomer\nWHERE MiddleName IS NOT NULL;"
  },
  {
    id: 347,
    level: "Intermediate",
    topic: "String & Date Functions",
    question: "Determine whether the BirthDate calendar year inside DimEmployee is a leap year by checking if a valid date exists for February 29th of that year.",
    hint: "Construct a character string date for February 29th and use ISDATE to validate.",
    concept: " प्रोग्रामेटिक logical date verification rules",
    answer: "SELECT FirstName, LastName, BirthDate, ISDATE(CAST(YEAR(BirthDate) AS VARCHAR(4)) + '-02-29') AS IsLeapYearBirth\nFROM DimEmployee;"
  },
  {
    id: 348,
    level: "Intermediate",
    topic: "String & Date Functions",
    question: "Extract everything before the first hyphen character '-' inside the structural identification code ProductAlternateKey inside DimProduct catalog lists.",
    hint: "Combine SUBSTRING with CHARINDEX('-', ProductAlternateKey) - 1 variables boundaries logic maps.",
    concept: "Advanced taxonomic text slicing",
    answer: "SELECT ProductAlternateKey, SUBSTRING(ProductAlternateKey, 1, CHARINDEX('-', ProductAlternateKey) - 1) AS ProductClassPrefix\nFROM DimProduct\nWHERE CHARINDEX('-', ProductAlternateKey) > 0;"
  },
  {
    id: 349,
    level: "Intermediate",
    topic: "String & Date Functions",
    question: "Determine the total count of individual product rows inside DimProduct containing numbers anywhere inside the text structure of EnglishProductName.",
    hint: "Apply a pattern matching filter context evaluating WHERE EnglishProductName LIKE '%[0-9]%' structures.",
    concept: "Alphanumeric pattern discovery loops",
    answer: "SELECT COUNT(*) AS ProductsWithNumbers\nFROM DimProduct\nWHERE EnglishProductName LIKE '%[0-9]%';"
  },
  {
    id: 350,
    level: "Intermediate",
    topic: "String & Date Functions",
    question: "Calculate the exact number of days remaining from the StartDate to the conclusion of the calendar year inside DimPromotion marketing targets schedules.",
    hint: "Execute a DATEDIFF calculation passing DAY intervals targeting December 31st of that start year.",
    concept: "Chronological limits verification matrices",
    answer: "SELECT EnglishPromotionName, StartDate, DATEDIFF(DAY, StartDate, CAST(CAST(YEAR(StartDate) AS VARCHAR(4)) + '-12-31' AS DATETIME)) AS DaysRemainingInYear\nFROM DimPromotion\nWHERE StartDate IS NOT NULL;"
  },
  {
    id: 351,
    level: "Intermediate",
    topic: "String & Date Functions",
    question: "Produce a clean upper case rendering of the City column combined with a comma separator and a lower case rendering of StateProvinceCode from DimGeography.",
    hint: "Combine UPPER(City), ', ', and LOWER(StateProvinceCode) inside a unified string projection operator path.",
    concept: "Case transformation mechanics profiles",
    answer: "SELECT City, StateProvinceCode, UPPER(City) + ', ' + LOWER(StateProvinceCode) AS NormalizedLocationLabel\nFROM DimGeography;"
  },
  {
    id: 352,
    level: "Intermediate",
    topic: "String & Date Functions",
    question: "Count the total number of distinct days recorded within FactCallCenter records mapping to either a weekend or weekday classification tracking parameter.",
    hint: "Join with DimDate and group rows by the boolean identifier flag WeekdayIndicator strings.",
    concept: "Categorical infrastructure footprinting",
    answer: "SELECT d.WeekdayIndicator, COUNT(DISTINCT f.DateKey) AS DaysCount\nFROM FactCallCenter f\nINNER JOIN DimDate d ON f.DateKey = d.DateKey\nGROUP BY d.WeekdayIndicator;"
  },
  {
    id: 353,
    level: "Intermediate",
    topic: "String & Date Functions",
    question: "Isolate customer records inside DimCustomer whose secondary email address string contains a provider node pattern structured precisely as 'msn'.",
    hint: "Apply regular text lookup checks using a standard LIKE '%msn%' validation constraint framework.",
    concept: "Infix pattern matching operations",
    answer: "SELECT CustomerKey, FirstName, LastName, EmailAddress\nFROM DimCustomer\nWHERE EmailAddress LIKE '%msn%';"
  },
  {
    id: 354,
    level: "Intermediate",
    topic: "String & Date Functions",
    question: "Extract the single final numeric integer digit from the standard identification variable EmployeeNationalIDAlternateKey inside DimEmployee files structures.",
    hint: "Isolate character slices using a direct RIGHT(EmployeeNationalIDAlternateKey, 1) command block directive.",
    concept: "Substring extraction routines mapping",
    answer: "SELECT EmployeeKey, EmployeeNationalIDAlternateKey, RIGHT(EmployeeNationalIDAlternateKey, 1) AS TerminalCheckDigit\nFROM DimEmployee\nWHERE EmployeeNationalIDAlternateKey IS NOT NULL;"
  },
  {
    id: 355,
    level: "Intermediate",
    topic: "String & Date Functions",
    question: "Calculate the exact date 90 days following the transaction entry record date derived out of OrderDateKey in FactInternetSales.",
    hint: "Perform an explicit DATEADD(DAY, 90, ...) calculation over converted integer timestamps.",
    concept: "Chronological matrix expansion horizons",
    answer: "SELECT SalesOrderNumber, OrderDateKey, DATEADD(DAY, 90, CONVERT(DATETIME, CAST(OrderDateKey AS VARCHAR(8)), 112)) AS AgingHorizonCutoff\nFROM FactInternetSales;"
  },
  {
    id: 356,
    level: "Intermediate",
    topic: "String & Date Functions",
    question: "Generate a formatted numeric code replacing all spacing gaps inside CommuteDistance textual indicators across DimCustomer rows with empty string marks.",
    hint: "Leverage standard REPLACE parameters filtering spaces away from categorical tracking data fields descriptions.",
    concept: "Character substitution logic metrics",
    answer: "SELECT CustomerKey, CommuteDistance, REPLACE(CommuteDistance, ' ', '') AS CompressedDistanceCode\nFROM DimCustomer\nWHERE CommuteDistance IS NOT NULL;"
  },
  {
    id: 357,
    level: "Intermediate",
    topic: "String & Date Functions",
    question: "Determine the numeric calendar quarter value derived out of the historical tracking property column DateKey active across FactFinance archives.",
    hint: "Perform an explicit extraction loop using DATEPART(QUARTER, ...) over cast integer paths expressions.",
    concept: "Granular time partitioning analysis",
    answer: "SELECT FinanceKey, DateKey, DATEPART(QUARTER, CONVERT(DATETIME, CAST(DateKey AS VARCHAR(8)), 112)) AS FiscalQuarterNum\nFROM FactFinance;"
  },
  {
    id: 358,
    level: "Intermediate",
    topic: "String & Date Functions",
    question: "Find the structural character length of the longest EnglishPromotionType description stored in the DimPromotion catalog list.",
    hint: "Combine MAX and LEN scalar conversion algorithms within a single projection statement blueprint.",
    concept: "String metrics boundary assessment",
    answer: "SELECT MAX(LEN(EnglishPromotionType)) AS MaxTypeLength\nFROM DimPromotion;"
  },
  {
    id: 359,
    level: "Intermediate",
    topic: "String & Date Functions",
    question: "Isolate structural items inside DimProductCategory whose primary name string EnglishProductCategoryName terminates with the character segment sequence 's'.",
    hint: "Filter active production records using a trailing percent wildcard model checking suffixes explicitly.",
    concept: "Suffix pattern matching architectures",
    answer: "SELECT ProductCategoryKey, EnglishProductCategoryName\nFROM DimProductCategory\nWHERE EnglishProductCategoryName LIKE '%s';"
  },
  {
    id: 360,
    level: "Intermediate",
    topic: "String & Date Functions",
    question: "Determine whether the primary corporate identity tag LoginID inside DimEmployee holds a character sequence length pointing to precisely more than 30 total characters symbols tracking.",
    hint: "Apply standard LEN function constraints rules inside your conditional filters logic assignments pipelines.",
    concept: "String length parameter assessment",
    answer: "SELECT EmployeeKey, LoginID\nFROM DimEmployee\nWHERE LEN(LoginID) > 30;"
  },

  // Deep Joins, Conditional Logic, and Matrix Multiplications (361 - 390)
  {
    id: 361,
    level: "Intermediate",
    topic: "Advanced Joins & Conditionals",
    question: "Join FactInternetSales with DimCustomer and DimGeography to list each SalesOrderNumber alongside the Customer's FullName and the CountryRegionName they reside in.",
    hint: "Perform sequential INNER JOIN operations passing from the fact table through the customer dimension into geography coordinates hooks.",
    concept: "Multi-tiered snowflake dimensional alignment",
    answer: "SELECT f.SalesOrderNumber, c.FirstName + ' ' + c.LastName AS CustomerName, g.CountryRegionName\nFROM FactInternetSales f\nINNER JOIN DimCustomer c ON f.CustomerKey = c.CustomerKey\nINNER JOIN DimGeography g ON c.GeographyKey = g.GeographyKey;"
  },
  {
    id: 412, // Resync numbers following explicit instruction continuation patterns to secure sequential mapping parameters safely
    level: "Intermediate",
    topic: "Advanced Joins & Conditionals",
    question: "Calculate total SalesAmount inside FactInternetSales mapped across a conditional classification determining whether the item belongs to a 'High Margin' or 'Standard Margin' tier based on ProductSubcategoryKey.",
    hint: "Incorporate an explicit CASE expression inside your projection assessing if ProductSubcategoryKey is between 1 and 10.",
    concept: "Conditional structural metric labeling",
    answer: "SELECT f.SalesOrderNumber, f.SalesAmount,\n  CASE \n    WHEN p.ProductSubcategoryKey BETWEEN 1 AND 10 THEN 'High Margin Product Group'\n    ELSE 'Standard Margin Product Group'\n  END AS MarginMarginClassification\nFROM FactInternetSales f\nINNER JOIN DimProduct p ON f.ProductKey = p.ProductKey;"
  },
  {
    id: 363,
    level: "Intermediate",
    topic: "Advanced Joins & Conditionals",
    question: "Execute a structural self-join against DimDepartmentGroup to match each DepartmentGroupName alongside its structural parent DepartmentGroupName descriptor string.",
    hint: "Alias DimDepartmentGroup into separate 'ChildNode' and 'ParentNode' labels, matching parent structural links keys parameters variables.",
    concept: "Self-referential taxonomy normalization mapping",
    answer: "SELECT child.DepartmentGroupName AS DivisionCategory, parent.DepartmentGroupName AS OverarchingParentGroup\nFROM DimDepartmentGroup child\nLEFT JOIN DimDepartmentGroup parent ON child.ParentDepartmentGroupKey = parent.DepartmentGroupKey;"
  },
  {
    id: 364,
    level: "Intermediate",
    topic: "Advanced Joins & Conditionals",
    question: "Query FactResellerSales connected via LEFT JOIN onto DimProduct and output a conditional label checking if the material inventory description ModelName matches a NULL value statement returning 'Catalog Out of Production'.",
    hint: "Combine a robust LEFT JOIN statement approach architecture with an explicit COALESCE check formatting missing values tracks.",
    concept: "Preservation of master tracking records checks",
    answer: "SELECT f.SalesOrderNumber, COALESCE(p.ModelName, 'Catalog Out of Production') AS EffectiveProductionModel\nFROM FactResellerSales f\nLEFT JOIN DimProduct p ON f.ProductKey = p.ProductKey;"
  },
  {
    id: 365,
    level: "Intermediate",
    topic: "Advanced Joins & Conditionals",
    question: "Construct a full analytical evaluation grid multiplying every unique sales reason tracked inside DimSalesReason against every unique regional layout record from DimSalesTerritory.",
    hint: "Apply a Cartesian product strategy mapping tables components via clear CROSS JOIN syntax mechanics configurations.",
    concept: "Analytical cross joined grid generation",
    answer: "SELECT r.SalesReasonName, t.SalesTerritoryRegion\nFROM DimSalesReason r\nCROSS JOIN DimSalesTerritory t;"
  },
  {
    id: 366,
    level: "Intermediate",
    topic: "Advanced Joins & Conditionals",
    question: "List each unique EmployeeKey found within FactSalesQuota combined with their LastName, displaying a default label of 'No Assigned Manager' if their supervisor ParentEmployeeKey maps to a NULL state.",
    hint: "Join FactSalesQuota to DimEmployee, applying an explicit CASE logic evaluating the manager structural pointer values.",
    concept: "Missing value fallback conditional routing",
    answer: "SELECT DISTINCT q.EmployeeKey, e.LastName,\n  CASE \n    WHEN e.ParentEmployeeKey IS NULL THEN 'No Assigned Manager'\n    ELSE 'Active Corporate Supervision Structure'\n  END AS SupervisoryStatus\nFROM FactSalesQuota q\nINNER JOIN DimEmployee e ON q.EmployeeKey = e.EmployeeKey;"
  },
  {
    id: 367,
    level: "Intermediate",
    topic: "Advanced Joins & Conditionals",
    question: "Associate FactProductInventory with DimProduct and DimSalesTerritory across standard structural joins hooks to show current UnitsBalance totals alongside regional tags.",
    hint: "Perform an INNER JOIN across both catalog dimension layout elements profiles variables safely using shared indicators pathways.",
    concept: "Fact-to-dimension structural matrix alignment",
    answer: "SELECT i.UnitsBalance, p.EnglishProductName, t.SalesTerritoryRegion\nFROM FactProductInventory i\nINNER JOIN DimProduct p ON i.ProductKey = p.ProductKey\nINNER JOIN DimSalesTerritory t ON i.SalesTerritoryKey = t.SalesTerritoryKey;"
  },
  {
    id: 368,
    level: "Intermediate",
    topic: "Advanced Joins & Conditionals",
    question: "Find all products inside DimProduct including those that have completely zero representation logs across FactInternetSales, filtering down specifically for items whose ListPrice exceeds $2,000.",
    hint: "Incorporate an exclusionary LEFT JOIN pattern statement checking for missing transaction indices paired with financial variable constraints.",
    concept: "Exclusionary multi-table preservation logic",
    answer: "SELECT p.ProductKey, p.EnglishProductName, p.ListPrice\nFROM DimProduct p\nLEFT JOIN FactInternetSales f ON p.ProductKey = f.ProductKey\nWHERE f.ProductKey IS NULL AND p.ListPrice > 2000;"
  },
  {
    id: 369,
    level: "Intermediate",
    topic: "Advanced Joins & Conditionals",
    question: "Combine FactFinance streams with DimAccount and DimScenario to output total monetary values Amount alongside account descriptions and scenario metadata targets tracks configurations profiles.",
    hint: "Link fact allocations directly into matching lookups tables blocks utilizing traditional double join intersection scripts.",
    concept: "Multi-dimensional ledger accounts unification",
    answer: "SELECT f.Amount, a.AccountDescription, s.ScenarioName\nFROM FactFinance f\nINNER JOIN DimAccount a ON f.AccountKey = a.AccountKey\nINNER JOIN DimScenario s ON f.ScenarioKey = s.ScenarioKey;"
  },
  {
    id: 370,
    level: "Intermediate",
    topic: "Advanced Joins & Conditionals",
    question: "Isolate customer records inside DimCustomer coupled with DimGeography where a conditional classification defines users as 'Domestic' if their CountryRegionName matches 'United States', or 'International' otherwise.",
    hint: "Join tables using GeographyKey applying a searched CASE expression directly within selection list projections variables.",
    concept: "Conditional demographic metric labeling",
    answer: "SELECT c.CustomerKey, c.LastName, g.CountryRegionName,\n  CASE \n    WHEN g.CountryRegionName = 'United States' THEN 'Domestic Market Segment'\n    ELSE 'International Trade Node'\n  END AS RegionalMarketClassification\nFROM DimCustomer c\nINNER JOIN DimGeography g ON c.GeographyKey = g.GeographyKey;"
  },
  {
    id: 371,
    level: "Intermediate",
    topic: "Advanced Joins & Conditionals",
    question: "Trace active campaign performance files by connecting FactInternetSales straight to DimPromotion and DimDate to aggregate total SalesAmount per promotion name during the calendar year 2013.",
    hint: "Perform dual inner alignments applying fixed year timeline logic constraints filters rules inside your WHERE statement parameters.",
    concept: "Fact-to-dimension normalizations structures",
    answer: "SELECT p.EnglishPromotionName, SUM(f.SalesAmount) AS ConsolidatedSales\nFROM FactInternetSales f\nINNER JOIN DimPromotion p ON f.PromotionKey = p.PromotionKey\nINNER JOIN DimDate d ON f.OrderDateKey = d.DateKey\nWHERE d.CalendarYear = 2013\nGROUP BY p.EnglishPromotionName;"
  },
  {
    id: 372,
    level: "Intermediate",
    topic: "Advanced Joins & Conditionals",
    question: "List all entries out of DimCurrency alongside any matching transaction identifiers in FactInternetSales using an explicit LEFT JOIN pattern statement approach architecture.",
    hint: "Retain inactive currency tracking codes completely within output streams by validating variables mapping properties left-side orientations safely.",
    concept: "Preservation of master reference directories",
    answer: "SELECT c.CurrencyName, c.CurrencyAlternateKey, f.SalesOrderNumber\nFROM DimCurrency c\nLEFT JOIN FactInternetSales f ON c.CurrencyKey = f.CurrencyKey;"
  },
  {
    id: 373,
    level: "Intermediate",
    topic: "Advanced Joins & Conditionals",
    question: "Determine historical product tracking lines allocations variations by connecting FactProductInventory directly into DimDate checkpoints showing UnitsBalance sorted sequentially by timeline progression parameters.",
    hint: "Perform clean relational inner key alignments sequencing early snapshot timestamps via standard ascending configurations metrics fields profiles.",
    concept: "Chronological matrix inventory alignment",
    answer: "SELECT i.ProductKey, i.UnitsBalance, d.FullDateAlternateKey\nFROM FactProductInventory i\nINNER JOIN DimDate d ON i.DateKey = d.DateKey\nORDER BY d.FullDateAlternateKey ASC;"
  },
  {
    id: 374,
    level: "Intermediate",
    topic: "Advanced Joins & Conditionals",
    question: "Identify locations in DimGeography containing zero consumer profiles documented inside DimCustomer directories files using a clean exclusionary join context statement.",
    hint: "Incorporate a LEFT JOIN onto the customer directory checking for missing primary right side indicators tags paths.",
    concept: "Exclusionary multi table preservation logic",
    answer: "SELECT g.GeographyKey, g.City, g.StateProvinceName\nFROM DimGeography g\nLEFT JOIN DimCustomer c ON g.GeographyKey = c.GeographyKey\nWHERE c.CustomerKey IS NULL;"
  },
  {
    id: 375,
    level: "Intermediate",
    topic: "Advanced Joins & Conditionals",
    question: "Create a testing template matrix crossing all unique structural names inside DimOrganization against all dynamic scenario vectors from DimScenario.",
    hint: "Cross target structural lines profiles fields completely via traditional mathematical cross selection command scripts formulas.",
    concept: "Analytical cross joined grid generation",
    answer: "SELECT o.OrganizationName, s.ScenarioName\nFROM DimOrganization o\nCROSS JOIN DimScenario s;"
  },
  {
    id: 376,
    level: "Intermediate",
    topic: "Advanced Joins & Conditionals",
    question: "Find the total aggregate SalesAmount in FactResellerSales grouped concurrently by both ProductSubcategoryKey and CalendarYear by executing cross joins connections between metrics structures.",
    hint: "Perform an INNER JOIN across fact tables and multi-tiered dimension lookup trees parsing composite dimensions validations logic statements properties.",
    concept: "Multi dimensional grouping matrix compilation",
    answer: "SELECT s.EnglishProductSubcategoryName, d.CalendarYear, SUM(f.SalesAmount) AS AggregateSales\nFROM FactResellerSales f\nINNER JOIN DimProduct p ON f.ProductKey = p.ProductKey\nINNER JOIN DimProductSubcategory s ON p.ProductSubcategoryKey = s.ProductSubcategoryKey\nINNER JOIN DimDate d ON f.OrderDateKey = d.DateKey\nGROUP BY s.EnglishProductSubcategoryName, d.CalendarYear;"
  },
  {
    id: 377,
    level: "Intermediate",
    topic: "Advanced Joins & Conditionals",
    question: "Evaluate workforce assignment density patterns maps by joining DimEmployee into DimSalesTerritory using an explicit LEFT JOIN statement, displaying 'Unassigned Sales Staff' if SalesTerritoryRegion is missing.",
    hint: "Apply a nested COALESCE or CASE function inside your select list to normalize blank regional mapping vectors variables paths.",
    concept: "Missing value fallback conditional routing",
    answer: "SELECT e.FirstName + ' ' + e.LastName AS StaffMember, COALESCE(t.SalesTerritoryRegion, 'Unassigned Sales Staff') AS OperatingRegion\nFROM DimEmployee e\nLEFT JOIN DimSalesTerritory t ON e.SalesTerritoryKey = t.SalesTerritoryKey;"
  },
  {
    id: 378,
    level: "Intermediate",
    topic: "Advanced Joins & Conditionals",
    question: "Link FactCallCenter metrics tables straight into DimDate records to filter out system logs that map specifically to the month name text 'January'.",
    hint: "Perform structural inner joins checking if the month string maps exactly matching your target character literal argument parameters.",
    concept: "Chronological metric filtering variables structures",
    answer: "SELECT f.DateKey, f.Calls, f.WageType, d.EnglishMonthName\nFROM FactCallCenter f\nINNER JOIN DimDate d ON f.DateKey = d.DateKey\nWHERE d.EnglishMonthName = 'January';"
  },
  {
    id: 379,
    level: "Intermediate",
    topic: "Advanced Joins & Conditionals",
    question: "Perform an absolute set combination unifying distinct ProductKey items active across retail lines with commercial wholesale lines using traditional database set operations.",
    hint: "Incorporate a clear UNION syntax approach signature pattern logic script formatting to eliminate repeating references.",
    concept: "Set unification deduplication models",
    answer: "SELECT ProductKey FROM FactInternetSales\nUNION\nSELECT ProductKey FROM FactResellerSales;"
  },
  {
    id: 380,
    level: "Intermediate",
    topic: "Advanced Joins & Conditionals",
    question: "Unify absolute transactional lists from FactInternetSales and FactResellerSales tracking ProductKeys while retaining duplicates across records layers systems maps.",
    hint: "Leverage a comprehensive UNION ALL processing block statement blueprint to track density volumes metrics directly.",
    concept: "Set unification inclusionary architectures",
    answer: "SELECT ProductKey FROM FactInternetSales\nUNION ALL\nSELECT ProductKey FROM FactResellerSales;"
  },
  {
    id: 381,
    level: "Intermediate",
    topic: "Advanced Joins & Conditionals",
    question: "Isolate CustomerKey attributes that appear inside retail streams FactInternetSales but are completely missing from commercial records inside FactResellerSales.",
    hint: "Apply an explicit EXCEPT difference keyword mapping operation parameters indicators checks.",
    concept: "Set difference extraction routines",
    answer: "SELECT CustomerKey FROM FactInternetSales\nEXCEPT\nSELECT CustomerKey FROM FactResellerSales;"
  },
  {
    id: 382,
    level: "Intermediate",
    topic: "Advanced Joins & Conditionals",
    question: "Identify overlapping tracking indices lines of ProductKey markers common across both retail and wholesale operational fact repositories matrices.",
    hint: "Implement the INTERSECT relational set validator calculation strategy cleanly.",
    concept: "Set intersection filtering structures",
    answer: "SELECT ProductKey FROM FactInternetSales\nINTERSECT\nSELECT ProductKey FROM FactResellerSales;"
  },
  {
    id: 383,
    level: "Intermediate",
    topic: "Advanced Joins & Conditionals",
    question: "Extract all items inside DimPromotion along with their matching transaction keys out of FactInternetSales, setting a conditional classification flag determining if a campaign is 'Highly Successful' based on more than 100 sales occurrences.",
    hint: "Perform an INNER JOIN group valuation tracking, applying a searched CASE expression checks.",
    concept: "Conditional group metric evaluation logic",
    answer: "SELECT p.EnglishPromotionName, COUNT(f.SalesOrderNumber) AS PromotionVolume,\n  CASE \n    WHEN COUNT(f.SalesOrderNumber) > 100 THEN 'Highly Successful Marketing Initiative'\n    ELSE 'Standard Auxiliary Campaign Baseline'\n  END AS CampaignPerformanceTier\nFROM DimPromotion p\nINNER JOIN FactInternetSales f ON p.PromotionKey = f.PromotionKey\nGROUP BY p.EnglishPromotionName;"
  },
  {
    id: 384,
    level: "Intermediate",
    topic: "Advanced Joins & Conditionals",
    question: "Join FactResellerSales with DimReseller and DimGeography to determine whether enterprise partners holding a 'Warehouse' business type operate within the city name 'Toronto'.",
    hint: "Perform sequential inner associations filtering target business descriptors flags and location literals.",
    concept: "Multi tiered snowflake dimensional alignment",
    answer: "SELECT f.SalesOrderNumber, r.ResellerName, r.BusinessType, g.City\nFROM FactResellerSales f\nINNER JOIN DimReseller r ON f.ResellerKey = r.ResellerKey\nINNER JOIN DimGeography g ON r.GeographyKey = g.GeographyKey\nWHERE r.BusinessType = 'Warehouse' AND g.City = 'Toronto';"
  },
  {
    id: 385,
    level: "Intermediate",
    topic: "Advanced Joins & Conditionals",
    question: "Create a tracking matrix crossing all unique structural validation options handles under AssetType inside DimAccount against all unique organization names from DimOrganization.",
    hint: "Incorporate a clear CROSS JOIN syntax block script parameters evaluations options structures.",
    concept: "Analytical cross joined grid generation",
    answer: "SELECT DISTINCT a.AccountType, o.OrganizationName\nFROM DimAccount a\nCROSS JOIN DimOrganization o;"
  },
  {
    id: 386,
    level: "Intermediate",
    topic: "Advanced Joins & Conditionals",
    question: "List all entries out of DimSalesReason paired via LEFT JOIN into FactInternetSalesReason to check historical utilization, displaying 0 if matching transaction entries maps fields are unassigned.",
    hint: "Combine a left preservation structure with a traditional ISNULL or COALESCE number calculator conversion loop.",
    concept: "Preservation of master reference directories",
    answer: "SELECT r.SalesReasonName, COUNT(h.SalesOrderNumber) AS UtilizationVolume\nFROM DimSalesReason r\nLEFT JOIN FactInternetSalesReason h ON r.SalesReasonKey = h.SalesReasonKey\nGROUP BY r.SalesReasonName;"
  },
  {
    id: 387,
    level: "Intermediate",
    topic: "Advanced Joins & Conditionals",
    question: "Link FactSalesQuota straight into DimEmployee across EmployeeKey to classify planned metrics targeting workers based on whether their tenure year surpasses a target threshold.",
    hint: "Perform structural alignments evaluating date comparison parameters flags variables.",
    concept: "Conditional performance metric cross evaluation",
    answer: "SELECT q.SalesAmountQuota, e.LastName, e.HireDate,\n  CASE \n    WHEN YEAR(e.HireDate) < 2010 THEN 'Senior Operational Force Asset'\n    ELSE 'Standard Enterprise Associate'\n  END AS StaffSeniorityClassification\nFROM FactSalesQuota q\nINNER JOIN DimEmployee e ON q.EmployeeKey = e.EmployeeKey;"
  },
  {
    id: 388,
    level: "Intermediate",
    topic: "Advanced Joins & Conditionals",
    question: "Join FactInternetSalesReason directly into DimSalesReason to isolate transaction tracks tracking reasons classified precisely matching the text string 'Price'.",
    hint: "Apply traditional dimensional normalization joining rules linking fact entries straight into metadata properties fields tags checks.",
    concept: "Fact-to-dimension normalizations structures",
    answer: "SELECT h.SalesOrderNumber, r.SalesReasonName, r.SalesReasonReasonType\nFROM FactInternetSalesReason h\nINNER JOIN DimSalesReason r ON h.SalesReasonKey = r.SalesReasonKey\nWHERE r.SalesReasonReasonType = 'Price';"
  },
  {
    id: 389,
    level: "Intermediate",
    topic: "Advanced Joins & Conditionals",
    question: "Execute a structural self-join across DimEmployee to trace staffing loops where an employee works within a separate department from their direct manager tracking nodes.",
    hint: "Alias tables into separate staff and superior frameworks, evaluating department text inequality configurations.",
    concept: "Self-referential hierarchy structural audits",
    answer: "SELECT emp.FirstName + ' ' + emp.LastName AS StaffMember, emp.DepartmentName AS StaffDept,\n  mgr.FirstName + ' ' + mgr.LastName AS Supervisor, mgr.DepartmentName AS SupervisorDept\nFROM DimEmployee emp\nINNER JOIN DimEmployee mgr ON emp.ParentEmployeeKey = mgr.EmployeeKey\nWHERE emp.DepartmentName <> mgr.DepartmentName;"
  },
  {
    id: 390,
    level: "Intermediate",
    topic: "Advanced Joins & Conditionals",
    question: "Combine distinct historical validation timelines indicators under DateKey from FactCallCenter stacked with FactProductInventory using safe database unique set operations.",
    hint: "Consolidate active operational calendars records fields generating structural unioned lines maps profiles.",
    concept: "Set unification deduplication models",
    answer: "SELECT DateKey FROM FactCallCenter\nUNION\nSELECT DateKey FROM FactProductInventory;"
  },

  // Deep Analytical Subqueries & CTEs (391 - 420)
  {
    id: 391,
    level: "Advanced",
    topic: "Subqueries & CTEs",
    question: "Find customers in DimCustomer who have spent more than the average lifetime spend of all customers in FactInternetSales using a Common Table Expression.",
    hint: "Build a CTE tracking total sales per customer, then query it using a scalar subquery calculating the average total.",
    concept: "CTE abstraction paired with scalar subquery isolation",
    answer: "WITH CustomerSpend AS (\n  SELECT CustomerKey, SUM(SalesAmount) AS TotalLifetimeSpend\n  FROM FactInternetSales\n  GROUP BY CustomerKey\n)\nSELECT c.CustomerKey, c.FirstName, c.LastName, cs.TotalLifetimeSpend\nFROM CustomerSpend cs\nINNER JOIN DimCustomer c ON cs.CustomerKey = c.CustomerKey\nWHERE cs.TotalLifetimeSpend > (SELECT AVG(TotalLifetimeSpend) FROM CustomerSpend);"
  },
  {
    id: 392,
    level: "Advanced",
    topic: "Subqueries & CTEs",
    question: "Identify the top 3 highest revenue-generating products within each ProductSubcategoryKey using a derived table inside the FROM clause.",
    hint: "Aggregate SalesAmount by product and subcategory in the subquery, then use RANK() or filter partitions in the outer scope.",
    concept: "Derived table isolation with ranking filters",
    answer: "SELECT SubcategoryKey, ProductKey, TotalRevenue\nFROM (\n  SELECT p.ProductSubcategoryKey AS SubcategoryKey, f.ProductKey, SUM(f.SalesAmount) AS TotalRevenue,\n    RANK() OVER(PARTITION BY p.ProductSubcategoryKey ORDER BY SUM(f.SalesAmount) DESC) AS RevRank\n  FROM FactInternetSales f\n  INNER JOIN DimProduct p ON f.ProductKey = p.ProductKey\n  GROUP BY p.ProductSubcategoryKey, f.ProductKey\n) AS SubcategoryRankedRevenue\nWHERE RevRank <= 3;"
  },
  {
    id: 393,
    level: "Advanced",
    topic: "Subqueries & CTEs",
    question: "Retrieve employee details from DimEmployee whose total tracked VacationHours sit strictly above the average vacation allotment of their specific department name structure.",
    hint: "Construct a correlated subquery computing department averages matching the outer employee department string.",
    concept: "Correlated subquery metric execution",
    answer: "SELECT emp.EmployeeKey, emp.FirstName, emp.LastName, emp.DepartmentName, emp.VacationHours\nFROM DimEmployee emp\nWHERE emp.VacationHours > (\n  SELECT AVG(sub.VacationHours)\n  FROM DimEmployee sub\n  WHERE sub.DepartmentName = emp.DepartmentName\n);"
  },
  {
    id: 394,
    level: "Advanced",
    topic: "Subqueries & CTEs",
    question: "List each unique EnglishProductCategoryName from DimProductCategory that has at least one item tracking a transaction within FactResellerSales using an explicit EXISTS operator loop.",
    hint: "Correlate category structures from outer lookups down through product definitions and fact records tables matrices.",
    concept: "Correlated relational existence validation",
    answer: "SELECT cat.EnglishProductCategoryName\nFROM DimProductCategory cat\nWHERE EXISTS (\n  SELECT 1 \n  FROM FactResellerSales frs\n  INNER JOIN DimProduct p ON frs.ProductKey = p.ProductKey\n  INNER JOIN DimProductSubcategory sub ON p.ProductSubcategoryKey = sub.ProductSubcategoryKey\n  WHERE sub.ProductCategoryKey = cat.ProductCategoryKey\n);"
  },
  {
    id: 395,
    level: "Advanced",
    topic: "Subqueries & CTEs",
    question: "Find the total count of distinct product lines in DimProduct whose base numerical ListPrice tracks strictly higher than the maximum price of any product in subcategory 3.",
    hint: "Use a scalar or block subquery utilizing MAX(ListPrice) WHERE ProductSubcategoryKey = 3 inside your conditional check loop.",
    concept: "Independent boundary value filtering",
    answer: "SELECT ProductKey, EnglishProductName, ListPrice\nFROM DimProduct\nWHERE ListPrice > (SELECT MAX(ListPrice) FROM DimProduct WHERE ProductSubcategoryKey = 3);"
  },
  {
    id: 396,
    level: "Advanced",
    topic: "Subqueries & CTEs",
    question: "Isolate customer records inside DimCustomer who have placed an order in FactInternetSales during 2013, but have completely zero transactional traces inside FactResellerSales using a nested NOT IN operator approach.",
    hint: "Embed list queries returning customer identifiers matching specific timeline properties fields tags filters rules.",
    concept: "Set membership lookup constraints",
    answer: "SELECT c.CustomerKey, c.FirstName, c.LastName\nFROM DimCustomer c\nWHERE c.CustomerKey IN (\n  SELECT DISTINCT f.CustomerKey \n  FROM FactInternetSales f\n  INNER JOIN DimDate d ON f.OrderDateKey = d.DateKey\n  WHERE d.CalendarYear = 2013\n)\nAND c.CustomerKey NOT IN (\n  SELECT DISTINCT CustomerKey \n  FROM FactResellerSales \n  WHERE CustomerKey IS NOT NULL\n);"
  },
  {
    id: 397,
    level: "Advanced",
    topic: "Subqueries & CTEs",
    question: "Abstract aggregate manager metrics pipelines using a named CTE block called CorporateSupervisors tracking total worker counts reporting to each supervisor ID, then fetch names from DimEmployee.",
    hint: "Formulate an internal grouping script isolating parent pointers parameters before joining back to master rosters files.",
    concept: "CTE modular abstraction frameworks",
    answer: "WITH CorporateSupervisors AS (\n  SELECT ParentEmployeeKey AS SupervisorID, COUNT(*) AS DirectReportsCount\n  FROM DimEmployee\n  WHERE ParentEmployeeKey IS NOT NULL\n  GROUP BY ParentEmployeeKey\n)\nSELECT e.EmployeeKey, e.FirstName + ' ' + e.LastName AS SupervisorName, s.DirectReportsCount\nFROM CorporateSupervisors s\nINNER JOIN DimEmployee e ON s.SupervisorID = e.EmployeeKey;"
  },
  {
    id: 398,
    level: "Advanced",
    topic: "Subqueries & CTEs",
    question: "Find the total monetary Amount in FactFinance that maps strictly underneath the absolute minimal spending recorded across corporate organizational entity 7.",
    hint: "Utilize a minimal subquery statement filter WHERE OrganizationKey = 7 inside parent value evaluation paths.",
    concept: "Independent boundary value filtering",
    answer: "SELECT FinanceKey, AccountKey, Amount\nFROM FactFinance\nWHERE Amount < (SELECT MIN(Amount) FROM FactFinance WHERE OrganizationKey = 7);"
  },
  {
    id: 399,
    level: "Advanced",
    topic: "Subqueries & CTEs",
    question: "Identify product records inside FactProductInventory tracking an active UnitCost higher than the average cost evaluated across that specific warehouse shelf layer coordination marker.",
    hint: "Construct a correlated subquery checking averages matching the outer asset record shelf variable criteria strings.",
    concept: "Correlated subquery metric execution",
    answer: "SELECT inv.ProductKey, inv.Shelf, inv.UnitCost\nFROM FactProductInventory inv\nWHERE inv.UnitCost > (\n  SELECT AVG(sub.UnitCost)\n  FROM FactProductInventory sub\n  WHERE sub.Shelf = inv.Shelf\n);"
  },
  {
    id: 400,
    level: "Advanced",
    topic: "Subqueries & CTEs",
    question: "Construct a recursive CTE blueprint tracking the absolute depth tiers down across the corporate ledger account tree structured inside DimAccount, documenting the lineage of parent pointers down to terminal children items.",
    hint: "Formulate a structural recursive framework anchoring records where ParentAccountKey is null, incrementing dynamic layer depth tracks markers explicitly.",
    concept: "Recursive taxonomic matrix processing",
    answer: "WITH AccountLinage AS (\n  SELECT AccountKey, ParentAccountKey, AccountDescription, 0 AS LedgerDepth\n  FROM DimAccount\n  WHERE ParentAccountKey IS NULL\n  UNION ALL\n  SELECT a.AccountKey, a.ParentAccountKey, a.AccountDescription, l.LedgerDepth + 1\n  FROM DimAccount a\n  INNER JOIN AccountLinage l ON a.ParentAccountKey = l.AccountKey\n)\nSELECT AccountKey, ParentAccountKey, AccountDescription, LedgerDepth\nFROM AccountLinage;"
  },

  // Complex Window Analytical Operations (401 - 430)
  {
    id: 401,
    level: "Advanced",
    topic: "Window Functions",
    question: "Compute a sequential row numbering index value ROW_NUMBER() over all customer profile records mapped inside DimCustomer, partitioned by EnglishOccupation and ordered alphabetically ascending by LastName.",
    hint: "Define structural partitions inside the window signature syntax using OVER(PARTITION BY EnglishOccupation ORDER BY LastName ASC).",
    concept: "Windowed sequence index partitioning",
    answer: "SELECT CustomerKey, EnglishOccupation, LastName, FirstName,\n  ROW_NUMBER() OVER(PARTITION BY EnglishOccupation ORDER BY LastName ASC) AS OccupationRowIndex\nFROM DimCustomer;"
  },
  {
    id: 402,
    level: "Advanced",
    topic: "Window Functions",
    question: "Determine total SalesAmount rankings across material options within FactInternetSales using the DENSE_RANK() mechanism inside each SalesTerritoryKey region block.",
    hint: "Apply DENSE_RANK() OVER(PARTITION BY SalesTerritoryKey ORDER BY SalesAmount DESC) to secure continuous ranking steps values.",
    concept: "Continuous analytical tier ranking",
    answer: "SELECT SalesOrderNumber, SalesTerritoryKey, SalesAmount,\n  DENSE_RANK() OVER(PARTITION BY SalesTerritoryKey ORDER BY SalesAmount DESC) AS DenseSalesRank\nFROM FactInternetSales;"
  },
  {
    id: 403,
    level: "Advanced",
    topic: "Window Functions",
    question: "Calculate the exact metric delta variance separating current transaction values from the immediately subsequent line order value inside FactInternetSales ordered by OrderDateKey using LEAD().",
    hint: "Leverage LEAD(SalesAmount, 1) OVER(ORDER BY OrderDateKey) to peek forward at subsequent record profiles fields rows.",
    concept: "Chronological sequence offset comparisons",
    answer: "SELECT SalesOrderNumber, OrderDateKey, SalesAmount,\n  LEAD(SalesAmount, 1) OVER(ORDER BY OrderDateKey) AS NextTransactionAmount,\n  LEAD(SalesAmount, 1) OVER(ORDER BY OrderDateKey) - SalesAmount AS RevenueDeltaVariance\nFROM FactInternetSales;"
  },
  {
    id: 404,
    level: "Advanced",
    topic: "Window Functions",
    question: "Compute an absolute moving baseline average of total call volumes Calls logged inside FactCallCenter spanning across the current day and the preceding 5 record dates timelines.",
    hint: "Incorporate inline frame bounds constraints defining ROWS BETWEEN 5 PRECEDING AND CURRENT ROW within window metrics loops.",
    concept: "Continuous sliding window accumulation",
    answer: "SELECT DateKey, Shift, Calls,\n  AVG(Calls) OVER(ORDER BY DateKey ROWS BETWEEN 5 PRECEDING AND CURRENT ROW) AS Rolling6DayCallAvg\nFROM FactCallCenter;"
  },
  {
    id: 405,
    level: "Advanced",
    topic: "Window Functions",
    question: "Distribute material catalog models recorded within DimProduct into exactly 5 mathematically balanced pricing brackets using NTILE(5) based on ListPrice.",
    hint: "Apply NTILE(5) OVER(ORDER BY ListPrice DESC) filtering high-to-low presentation models perfectly.",
    concept: "Balanced quantitative metric slicing",
    answer: "SELECT ProductKey, EnglishProductName, ListPrice,\n  NTILE(5) OVER(ORDER BY ListPrice DESC) AS PriceQuintileBracket\nFROM DimProduct\nWHERE ListPrice IS NOT NULL AND ListPrice > 0;"
  },
  {
    id: 406,
    level: "Advanced",
    topic: "Window Functions",
    question: "Find the absolute highest single transaction amount logged per individual consumer asset inside FactInternetSales without using a GROUP BY query statement.",
    hint: "Utilize the MAX(SalesAmount) OVER(PARTITION BY CustomerKey) analytical syntax path projection.",
    concept: "Windowed inline profile comparison models",
    answer: "SELECT SalesOrderNumber, CustomerKey, SalesAmount,\n  MAX(SalesAmount) OVER(PARTITION BY CustomerKey) AS PeakCustomerSpendBaseline\nFROM FactInternetSales;"
  },
  {
    id: 407,
    level: "Advanced",
    topic: "Window Functions",
    question: "Compute a running percentage metric trace checking the cumulative weight contribution of individual transactions to total regional revenue streams inside FactResellerSales.",
    hint: "Divide the current line SalesAmount by a comprehensive windowed sum SUM(SalesAmount) OVER(PARTITION BY SalesTerritoryKey) expression.",
    concept: "Proportional scale value assessment metrics",
    answer: "SELECT SalesOrderNumber, SalesTerritoryKey, SalesAmount,\n  SalesAmount / SUM(SalesAmount) OVER(PARTITION BY SalesTerritoryKey) * 100.0 AS RegionalRevenueContributionPct\nFROM FactResellerSales;"
  },
  {
    id: 408,
    level: "Advanced",
    topic: "Window Functions",
    question: "Isolate lines inside FactSalesQuota tracking employee performance where their current year target marks a drop compared to the previous year using LAG().",
    hint: "Construct an advanced look back parameter matrix using LAG(SalesAmountQuota, 1) OVER(PARTITION BY EmployeeKey ORDER BY CalendarYear).",
    concept: "Historical offset performance checks",
    answer: "WITH QuotaTracking AS (\n  SELECT EmployeeKey, CalendarYear, SalesAmountQuota,\n    LAG(SalesAmountQuota, 1) OVER(PARTITION BY EmployeeKey ORDER BY CalendarYear) AS PriorQuota\n  FROM FactSalesQuota\n)\nSELECT EmployeeKey, CalendarYear, SalesAmountQuota, PriorQuota\nFROM QuotaTracking\nWHERE PriorQuota IS NOT NULL AND SalesAmountQuota < PriorQuota;"
  },
  {
    id: 409,
    level: "Advanced",
    topic: "Window Functions",
    question: "Determine the exact first transaction date and the final transaction date recorded for each individual customer account inside FactInternetSales utilizing FIRST_VALUE and LAST_VALUE engines.",
    hint: "Apply analytical first and last indicators over ordering metrics keys mappings structures frames explicitly.",
    concept: "Windowed sequence edge tracking",
    answer: "SELECT DISTINCT CustomerKey,\n  FIRST_VALUE(OrderDateKey) OVER(PARTITION BY CustomerKey ORDER BY OrderDateKey ASC ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING) AS InitialPurchaseDateKey,\n  LAST_VALUE(OrderDateKey) OVER(PARTITION BY CustomerKey ORDER BY OrderDateKey ASC ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING) AS TerminalPurchaseDateKey\nFROM FactInternetSales;"
  },
  {
    id: 410,
    level: "Advanced",
    topic: "Window Functions",
    question: "Find the total quantity of warehouse allocations logged inside FactProductInventory, generating a continuous running sum total of UnitsBalance per product across subsequent timeline keys.",
    hint: "Sum financial counts properties over an ordered timeline frame OVER(PARTITION BY ProductKey ORDER BY DateKey).",
    concept: "Continuous value accumulation dynamics",
    answer: "SELECT ProductKey, DateKey, UnitsBalance,\n  SUM(UnitsBalance) OVER(PARTITION BY ProductKey ORDER BY DateKey ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS CumulativeStockTrace\nFROM FactProductInventory;"
  },
  {
    id: 411,
    level: "Advanced",
    topic: "Window Functions",
    question: "Rank workers inside DimEmployee based upon their calculated tenure length using DENSE_RANK() within each distinct DepartmentName classification group.",
    hint: "Sequence chronology vectors passing OVER(PARTITION BY DepartmentName ORDER BY HireDate ASC) setups validation scripts.",
    concept: "Continuous analytical tier ranking",
    answer: "SELECT EmployeeKey, DepartmentName, FirstName, LastName, HireDate,\n  DENSE_RANK() OVER(PARTITION BY DepartmentName ORDER BY HireDate ASC) AS DepartmentTenureRank\nFROM DimEmployee;"
  },
  {
    id: 412,
    level: "Advanced",
    topic: "Window Functions",
    question: "Isolate the absolute secondary oldest record entry line logged per individual human asset configuration inside FactSalesQuota using sequence indexes filtering.",
    hint: "Wrap an inline ROW_NUMBER sequence framework inside a outer validation constraint filtering where index matches 2.",
    concept: "Windowed sequence index partitioning",
    answer: "SELECT EmployeeKey, CalendarYear, SalesAmountQuota\nFROM (\n  SELECT EmployeeKey, CalendarYear, SalesAmountQuota,\n    ROW_NUMBER() OVER(PARTITION BY EmployeeKey ORDER BY CalendarYear ASC) AS QuotaYearIndex\n  FROM FactSalesQuota\n) AS StagedRankedQuotas\nWHERE QuotaYearIndex = 2;"
  },
  {
    id: 413,
    level: "Advanced",
    topic: "Window Functions",
    question: "Compute an inline calculation representing the exact standard deviation metric STDEV() tracking values across Amount parameters inside FactFinance per AccountKey ledger block context.",
    hint: "Incorporate specialized statistical window tools straight over targeted accounting distributions lines paths.",
    concept: "Windowed inline profile comparison models",
    answer: "SELECT FinanceKey, AccountKey, Amount,\n  STDEV(Amount) OVER(PARTITION BY AccountKey) AS LedgerAccountStandardDeviation\nFROM FactFinance;"
  },
  {
    id: 414,
    level: "Advanced",
    topic: "Window Functions",
    question: "Segment strategic international location lines records inside DimGeography into exactly 3 groups matching population density parameters using NTILE checking.",
    hint: "Execute quantitative set allocations passing over primary key identifiers values fields configurations.",
    concept: "Balanced quantitative metric slicing",
    answer: "SELECT GeographyKey, City, CountryRegionName,\n  NTILE(3) OVER(ORDER BY GeographyKey ASC) AS ArbitraryRegionalTierBucket\nFROM DimGeography;"
  },
  {
    id: 415,
    level: "Advanced",
    topic: "Window Functions",
    question: "Compare each year's total spending records logged inside FactFinance against the subsequent calendar tier timeline using the forward-looking LEAD() statement architecture blueprint.",
    hint: "Peek forward at subsequent calculated parameters maps variables values using clean analytical index offsets calculations formulas.",
    concept: "Chronological sequence offset comparisons",
    answer: "WITH AnnualLedgerSummary AS (\n  SELECT DateKey, SUM(Amount) AS AnnualAmount\n  FROM FactFinance\n  GROUP BY DateKey\n)\nSELECT DateKey, AnnualAmount,\n  LEAD(AnnualAmount, 1) OVER(ORDER BY DateKey ASC) AS NextPeriodLedgerAmount\nFROM AnnualLedgerSummary;"
  },
  {
    id: 416,
    level: "Advanced",
    topic: "Window Functions",
    question: "Isolate the absolute highest transaction record lines from FactResellerSales within each individual country region tracking boundary without processing group operations models templates.",
    hint: "Apply standard ranking functions sorting lines descending filtering topmost records indexes fields explicitly inside nested wrappers fields.",
    concept: "Windowed structural partitioning logic",
    answer: "SELECT SalesOrderNumber, SalesTerritoryKey, SalesAmount\nFROM (\n  SELECT SalesOrderNumber, SalesTerritoryKey, SalesAmount,\n    ROW_NUMBER() OVER(PARTITION BY SalesTerritoryKey ORDER BY SalesAmount DESC) AS TerritorialSalesRankID\n  FROM FactResellerSales\n) AS PartitionedWholesaleSales\nWHERE TerritorialSalesRankID = 1;"
  },
  {
    id: 417,
    level: "Advanced",
    topic: "Window Functions",
    question: "Compute a running total tracking column summing total call counts inside FactCallCenter across subsequent operational dates timelines partitions elements.",
    hint: "Apply continuous balance transformations paths straight over calendar coordinate markers fields pipelines.",
    concept: "Continuous value accumulation dynamics",
    answer: "SELECT DateKey, Shift, Calls,\n  SUM(Calls) OVER(PARTITION BY Shift ORDER BY DateKey ASC ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS ShiftCallAccumulationTrace\nFROM FactCallCenter;"
  },
  {
    id: 418,
    level: "Advanced",
    topic: "Window Functions",
    question: "Find the percentage variance tracking scale checking the current line item unit valuation metric UnitCost compared against the average cost derived across that product configuration inside FactProductInventory maps.",
    hint: "Divide individual unit financial parameters by an inline windowed average metric SUM/AVG OVER parameters checking equations.",
    concept: "Proportional scale value assessment metrics",
    answer: "SELECT ProductKey, Shelf, UnitCost,\n  UnitCost / AVG(UnitCost) OVER(PARTITION BY ProductKey) * 100.0 AS CostRatioToProductAveragePct\nFROM FactProductInventory;"
  },
  {
    id: 419,
    level: "Advanced",
    topic: "Window Functions",
    question: "Rank promotions in DimPromotion based on their total campaign durations in days using the RANK() analytical execution tool framework.",
    hint: "Incorporate explicit window sorting configurations evaluating computed date mathematical offsets metrics definitions.",
    concept: "Windowed sequence index partitioning",
    answer: "SELECT PromotionKey, EnglishPromotionName, DATEDIFF(DAY, StartDate, EndDate) AS CampaignSpanDays,\n  RANK() OVER(ORDER BY DATEDIFF(DAY, StartDate, EndDate) DESC) AS DurationEfficiencyRank\nFROM DimPromotion\nWHERE StartDate IS NOT NULL AND EndDate IS NOT NULL;"
  },
  {
    id: 420,
    level: "Advanced",
    topic: "Window Functions",
    question: "Compute a moving standard financial average checking the transactional value metrics SalesAmount inside FactInternetSales spanning 2 lines preceding and 2 lines following the current operation.",
    hint: "Define explicit complex floating sequence boundaries parameters utilizing ROWS BETWEEN 2 PRECEDING AND 2 FOLLOWING arguments layouts.",
    concept: "Continuous sliding window accumulation",
    answer: "SELECT SalesOrderNumber, ProductKey, SalesAmount,\n  AVG(SalesAmount) OVER(ORDER BY SalesOrderNumber ROWS BETWEEN 2 PRECEDING AND 2 FOLLOWING) AS Centered5LineMovingAvg\nFROM FactInternetSales;"
  },

  // Programmatic T-SQL Blocks, Architecture, and High-Tuning Optimization Metrics (421 - 450)
  {
    id: 421,
    level: "Advanced",
    topic: "Stored Procedures",
    question: "Write a compiled database stored procedure entity object module container named usp_SecureMaterializedInventoryTransfer parsing dual inputs variables to audit stock relocations parameters smoothly.",
    hint: "Encapsulate programmatic database update transactions inside standard structural markers parameters loaded with TRY/CATCH protection logic structures.",
    concept: "Procedural logic encapsulation and error management",
    answer: "CREATE PROCEDURE usp_SecureMaterializedInventoryTransfer\n  @SourceProductKey INT,\n  @RelocationQuantity INT\nAS\nBEGIN\n  SET NOCOUNT ON;\n  BEGIN TRY\n    BEGIN TRANSACTION;\n    UPDATE FactProductInventory SET UnitsBalance = UnitsBalance - @RelocationQuantity WHERE ProductKey = @SourceProductKey AND Shelf = '1';\n    IF (SELECT UnitsBalance FROM FactProductInventory WHERE ProductKey = @SourceProductKey AND Shelf = '1') < 0\n      THROW 52000, 'Operational failure: Warehouse stocks parameter drops below minimal requirements parameters variables.', 1;\n    COMMIT TRANSACTION;\n  END TRY\n  BEGIN CATCH\n    IF @@TRANCOUNT > 0 ROLLBACK TRANSACTION;\n    THROW;\n  END CATCH;\nEND;"
  },
  {
    id: 422,
    level: "Advanced",
    topic: "Functions",
    question: "Create an advanced high-speed inline Table-Valued Function (iTVF) block component named fn_StreamLocalizedGeographicConsumerRoster parsing country names strings to return matching customer arrays tables.",
    hint: "The iTVF architecture maps query return frameworks straight to an active RETURNS TABLE schema layout outputting complete datasets directly without processing loops parameters check structures.",
    concept: "Functional database abstraction workflows",
    answer: "CREATE FUNCTION fn_StreamLocalizedGeographicConsumerRoster\n  (@TargetCountryRegionName NVARCHAR(50))\nRETURNS TABLE\nAS\nRETURN (\n  SELECT c.CustomerKey, c.FirstName, c.LastName, g.City, g.CountryRegionName\n  FROM DimCustomer c\n  INNER JOIN DimGeography g ON c.GeographyKey = g.GeographyKey\n  WHERE g.CountryRegionName = @TargetCountryRegionName\n);"
  },
  {
    id: 423,
    level: "Advanced",
    topic: "Query Optimization",
    question: "Deploy a high efficiency covering non clustered database physical indexing storage asset blueprint named IX_FactResellerSales_TuningCovering over EmployeeKey including operational measurement tracking columns variables via INCLUDE arguments definitions.",
    hint: "Boost systemic processing speeds parameters by embedding non-key calculated properties indicators directly inside physical index leaf sorting tracks architectures configurations parameters filters rules sets.",
    concept: "Physical schema tuning index architectures",
    answer: "CREATE NONCLUSTERED INDEX IX_FactResellerSales_TuningCovering\nON FactResellerSales (EmployeeKey)\nINCLUDE (SalesAmount, OrderQuantity, TaxAmt);\nGO"
  },
  {
    id: 424,
    level: "Advanced",
    topic: "Dynamic SQL",
    question: "Program an advanced dynamic T-SQL execution logic block script parameter utilizing sp_executesql loaded with system character parameters tracking validations to prevent SQL Injection over dynamic tables specifications indicators.",
    hint: "Sanitize structural target variable properties parameters components arrays mappings strings combining QUOTENAME arguments directly inside dynamically compiled query execution engines commands logic syntax setups structures variables parameters.",
    concept: "Secured dynamic execution frameworks",
    answer: "CREATE PROCEDURE usp_ExecuteSecuredDynamicTableScan\n  @TargetDatabaseTableName NVARCHAR(128)\nAS\nBEGIN\n  SET NOCOUNT ON;\n  IF OBJECT_ID(@TargetDatabaseTableName, 'U') IS NULL\n  BEGIN\n    RAISERROR('Target system table entity unverified.', 16, 1);\n    RETURN;\n  END;\n  DECLARE @DynamicallyCompiledSQL NVARCHAR(MAX);\n  SET @DynamicallyCompiledSQL = N'SELECT TOP(10) * FROM ' + QUOTENAME(@TargetDatabaseTableName) + N';';\n  EXEC sp_executesql @DynamicallyCompiledSQL;\nEND;"
  },
  {
    id: 425,
    level: "Advanced",
    topic: "DMVs",
    question: "Query systemic index metadata diagnostic trackers parsing sys.dm_db_missing_index_details joined directly with sys.dm_db_missing_index_groups stats containers to isolate missing index recommendations across active data stores configurations parameters indicators.",
    hint: "Leverage standard database catalog dynamic management view datasets parameters sorting system gaps mappings structures to discover optimization vectors pathways.",
    concept: "Metadata engine diagnostic tuning models",
    answer: "SELECT migs.avg_user_impact AS ProjectedPerformanceGainPct, mid.statement AS TargetTablePath, mid.equality_columns, mid.inequality_columns, mid.included_columns\nFROM sys.dm_db_missing_index_details mid\nINNER JOIN sys.dm_db_missing_index_groups mig ON mid.index_handle = mig.index_handle\nINNER JOIN sys.dm_db_missing_index_group_stats migs ON mig.index_group_handle = migs.group_handle\nORDER BY ProjectedPerformanceGainPct DESC;"
  },
  {
    id: 426,
    level: "Advanced",
    topic: "Query Optimization",
    question: "Incorporate optimization diagnostics instrumentation metrics toggles utilizing SET STATISTICS IO ON straight to benchmark query computational costs profiles data.",
    hint: "Prepend standard system telemetry parameter adjustments handles variables straight to execution paths fields tracking profiling hardware resource overhead benchmarks frames.",
    concept: "Telemetry infrastructure profiling engines",
    answer: "SET STATISTICS IO ON;\nSELECT AccountKey, SUM(Amount) FROM FactFinance GROUP BY AccountKey;\nSET STATISTICS IO OFF;"
  },
  {
    id: 427,
    level: "Advanced",
    topic: "Query Optimization",
    question: "Apply explicit execution planner directive hints inside the tail configuration boundary layer forcing a MERGE JOIN strategy across tables configurations profiles metadata fields parameters.",
    hint: "Append the specific OPTION command definition pattern directly to the terminal endpoint of the parent SELECT block to overwrite core query analyzer mapping selections.",
    concept: "Execution path hint injectors",
    answer: "SELECT f.SalesOrderNumber, p.EnglishProductName\nFROM FactInternetSales f\nINNER JOIN DimProduct p ON f.ProductKey = p.ProductKey\nOPTION (MERGE JOIN);"
  },
  {
    id: 428,
    level: "Advanced",
    topic: "Temp Tables",
    question: "Stage a complex partitioned aggregate multi variable revenue distribution dataset cleanly inside a localized micro high performance memory buffer hash table container named #StagedPerformanceVectors, executing clean subsequent dropping tasks configurations profiles.",
    hint: "Create rapid runtime memory data caches structures paths via explicit pound sign naming metrics allocations parameters systems setups formats calculations scripts.",
    concept: "Volatile staging grid isolation tools",
    answer: "CREATE TABLE #StagedPerformanceVectors (\n  StagedCustomerKey INT PRIMARY KEY,\n  AggregatedLifetimeSpend MONEY NOT NULL\n);\nINSERT INTO #StagedPerformanceVectors\nSELECT CustomerKey, SUM(SalesAmount) FROM FactInternetSales GROUP BY CustomerKey;\nSELECT c.LastName, s.AggregatedLifetimeSpend\nFROM #StagedPerformanceVectors s\nINNER JOIN DimCustomer c ON s.StagedCustomerKey = c.CustomerKey;\nDROP TABLE #StagedPerformanceVectors;"
  },
  {
    id: 429,
    level: "Advanced",
    topic: "Table Variables",
    question: "Declare a local high speed table variable named @MaterializedSubCategoryMatrix inside your transaction routine tracking taxonomy descriptors maps cleanly using a DECLARE command structure context statement blueprint.",
    hint: "Initialize temporary programmatic structures variables fields tracking markers inside processing scopes directly via standard structural variable assignment properties validation rules guidelines.",
    concept: "Volatile staging grid isolation tools",
    answer: "DECLARE @MaterializedSubCategoryMatrix TABLE (\n  IndexedProductSubcategoryKey INT PRIMARY KEY,\n  CleanDescriptiveName NVARCHAR(50) NOT NULL\n);\nINSERT INTO @MaterializedSubCategoryMatrix\nSELECT ProductSubcategoryKey, EnglishProductSubcategoryName FROM DimProductSubcategory;\nSELECT * FROM @MaterializedSubCategoryMatrix;"
  },
  {
    id: 430,
    level: "Advanced",
    topic: "DMVs",
    question: "Analyze active thread execution queues and engine contention paths utilizing standard dynamic view datasets sys.dm_exec_requests crossed via cross applies straight into live parsing frameworks sys.dm_exec_sql_text lines tracking blocks symbols parameters updates.",
    hint: "Isolate engine contention thresholds vectors fields finding blocking session IDs configurations tracks files fields utilizing pristine systems diagnostics catalog definitions setups schemas structures variables options tracks.",
    concept: "Metadata engine diagnostic tuning models",
    answer: "SELECT r.session_id AS BlockedSessionID, r.blocking_session_id AS BlockingSessionID, r.wait_type, r.wait_time AS WaitDurationMs, t.text AS ExecutingQueryStatementCode\nFROM sys.dm_exec_requests r\nCROSS APPLY sys.dm_exec_sql_text(r.sql_handle) t\nWHERE r.blocking_session_id > 0;"
  },
{
    id: 431,
    level: "Advanced",
    topic: "Subqueries & CTEs",
    question: "Using a single query with multiple CTEs, find the total internet sales and total reseller sales per year, and calculate the absolute difference between them.",
    hint: "Create one CTE for Internet sales, one for Reseller sales, then join them on the year in the outer query.",
    concept: "Multiple CTE unification and comparison",
    answer: "WITH InternetYearly AS (\n  SELECT d.CalendarYear, SUM(f.SalesAmount) AS InternetTotal\n  FROM FactInternetSales f\n  INNER JOIN DimDate d ON f.OrderDateKey = d.DateKey\n  GROUP BY d.CalendarYear\n),\nResellerYearly AS (\n  SELECT d.CalendarYear, SUM(f.SalesAmount) AS ResellerTotal\n  FROM FactResellerSales f\n  INNER JOIN DimDate d ON f.OrderDateKey = d.DateKey\n  GROUP BY d.CalendarYear\n)\nSELECT i.CalendarYear, i.InternetTotal, r.ResellerTotal,\n  ABS(i.InternetTotal - r.ResellerTotal) AS AbsoluteRevenueDifference\nFROM InternetYearly i\nINNER JOIN ResellerYearly r ON i.CalendarYear = r.CalendarYear;"
  },
  {
    id: 432,
    level: "Advanced",
    topic: "Subqueries & CTEs",
    question: "Find the products in DimProduct that have never been sold to any customer living in Europe, utilizing a nested subquery structure with NOT IN.",
    hint: "Identify geography keys for Europe, match to customers, then find product keys sold to those customers, and exclude them.",
    concept: "Nested multi-tiered set exclusion",
    answer: "SELECT ProductKey, EnglishProductName\nFROM DimProduct\nWHERE ProductKey NOT IN (\n  SELECT DISTINCT ProductKey\n  FROM FactInternetSales\n  WHERE CustomerKey IN (\n    SELECT CustomerKey\n    FROM DimCustomer c\n    INNER JOIN DimGeography g ON c.GeographyKey = g.GeographyKey\n    WHERE g.SalesTerritoryKey IN (\n      SELECT SalesTerritoryKey\n      FROM DimSalesTerritory\n      WHERE SalesTerritoryGroup = 'Europe'\n    )\n  )\n);"
  },
  {
    id: 433,
    level: "Advanced",
    topic: "Subqueries & CTEs",
    question: "Write a query utilizing a correlated subquery in the SELECT list to display each product's name, its subcategory key, and the percentage of total subcategory revenue it contributes.",
    hint: "Compute the total subcategory revenue inside the nested subquery by filtering on the outer query's ProductSubcategoryKey.",
    concept: "Correlated subquery scalar projection",
    answer: "SELECT p.ProductKey, p.EnglishProductName, p.ProductSubcategoryKey, f.SalesAmount,\n  (f.SalesAmount / (\n    SELECT SUM(subF.SalesAmount)\n    FROM FactInternetSales subF\n    INNER JOIN DimProduct subP ON subF.ProductKey = subP.ProductKey\n    WHERE subP.ProductSubcategoryKey = p.ProductSubcategoryKey\n  )) * 100.0 AS PercentContributionToSubcategory\nFROM FactInternetSales f\nINNER JOIN DimProduct p ON f.ProductKey = p.ProductKey;"
  },
  {
    id: 434,
    level: "Advanced",
    topic: "Subqueries & CTEs",
    question: "Identify the top customer by lifetime spend inside a CTE, then join back to the main schema to find every specific product category that customer has purchased.",
    hint: "Isolate the top customer first with a single-row CTE using TOP(1), then perform joins to find distinct purchased product categories.",
    concept: "Modular entity-to-taxonomy mapping",
    answer: "WITH TopCustomer AS (\n  SELECT TOP(1) CustomerKey, SUM(SalesAmount) AS LifetimeSpend\n  FROM FactInternetSales\n  GROUP BY CustomerKey\n  ORDER BY LifetimeSpend DESC\n)\nSELECT DISTINCT cat.EnglishProductCategoryName\nFROM FactInternetSales f\nINNER JOIN TopCustomer tc ON f.CustomerKey = tc.CustomerKey\nINNER JOIN DimProduct p ON f.ProductKey = p.ProductKey\nINNER JOIN DimProductSubcategory sub ON p.ProductSubcategoryKey = sub.ProductSubcategoryKey\nINNER JOIN DimProductCategory cat ON sub.ProductCategoryKey = cat.ProductCategoryKey;"
  },
  {
    id: 435,
    level: "Advanced",
    topic: "Subqueries & CTEs",
    question: "Find the average transaction amount for each currency in FactInternetSales, but only include transactions that occurred on days where the total global sales across all currencies exceeded 100,000 units of currency.",
    hint: "Use a subquery in the WHERE clause that aggregates sales by OrderDateKey to filter valid transaction dates.",
    concept: "Global threshold dates filtration",
    answer: "SELECT CurrencyKey, AVG(SalesAmount) AS AvgSalesAmount\nFROM FactInternetSales\nWHERE OrderDateKey IN (\n  SELECT OrderDateKey\n  FROM FactInternetSales\n  GROUP BY OrderDateKey\n  HAVING SUM(SalesAmount) > 100000\n)\nGROUP BY CurrencyKey;"
  },
  {
    id: 436,
    level: "Advanced",
    topic: "Subqueries & CTEs",
    question: "Using a CTE to eliminate product duplicates, write a query that identifies any ProductSubcategoryKeys containing more than 5 products whose standard cost is higher than the overall average standard cost of all products.",
    hint: "Filter products in the CTE against the aggregate scalar average cost, then group by subcategory key in the outer query.",
    concept: "Taxonomic cost validation using CTEs",
    answer: "WITH HighCostProducts AS (\n  SELECT ProductKey, ProductSubcategoryKey, StandardCost\n  FROM DimProduct\n  WHERE StandardCost > (SELECT AVG(StandardCost) FROM DimProduct)\n)\nSELECT ProductSubcategoryKey, COUNT(*) AS HighCostProductCount\nFROM HighCostProducts\nWHERE ProductSubcategoryKey IS NOT NULL\nGROUP BY ProductSubcategoryKey\nHAVING COUNT(*) > 5;"
  },
  {
    id: 437,
    level: "Advanced",
    topic: "Subqueries & CTEs",
    question: "List all employees in DimEmployee whose direct team (reporting to them) has a combined total of more than 100 sick leave hours, using a correlated EXISTS subquery.",
    hint: "Correlate ParentEmployeeKey from the inner subquery against the EmployeeKey of the outer query, and check the sum of SickLeaveHours.",
    concept: "Hierarchical subquery aggregation boundaries",
    answer: "SELECT mgr.EmployeeKey, mgr.FirstName, mgr.LastName\nFROM DimEmployee mgr\nWHERE EXISTS (\n  SELECT 1\n  FROM DimEmployee sub\n  WHERE sub.ParentEmployeeKey = mgr.EmployeeKey\n  GROUP BY sub.ParentEmployeeKey\n  HAVING SUM(sub.SickLeaveHours) > 100\n);"
  },
  {
    id: 438,
    level: "Advanced",
    topic: "Subqueries & CTEs",
    question: "Retrieve the maximum transaction amount from FactResellerSales for each distinct business territory group, utilizing a subquery in the FROM clause to calculate regional aggregates.",
    hint: "Join a territory-indexed derived table containing transactional maximum values onto the main DimSalesTerritory catalog.",
    concept: "Derived staging grid isolation paths",
    answer: "SELECT t.SalesTerritoryGroup, maxSales.PeakAmount\nFROM DimSalesTerritory t\nINNER JOIN (\n  SELECT SalesTerritoryKey, MAX(SalesAmount) AS PeakAmount\n  FROM FactResellerSales\n  GROUP BY SalesTerritoryKey\n) AS maxSales ON t.SalesTerritoryKey = maxSales.SalesTerritoryKey;"
  },
  {
    id: 439,
    level: "Advanced",
    topic: "Subqueries & CTEs",
    question: "Find the total quantity of stock balance metrics inside FactProductInventory for products belonging strictly to the category 'Bikes', using a clean nested subquery validation framework.",
    hint: "Filter ProductKeys inside the inventory fact block using an IN statement spanning down to DimProductCategory.",
    concept: "Multi-tiered membership filtering layouts",
    answer: "SELECT SUM(UnitsBalance) AS TotalBikeInventory\nFROM FactProductInventory\nWHERE ProductKey IN (\n  SELECT ProductKey\n  FROM DimProduct\n  WHERE ProductSubcategoryKey IN (\n    SELECT ProductSubcategoryKey\n    FROM DimProductSubcategory\n    WHERE ProductCategoryKey IN (\n      SELECT ProductCategoryKey\n      FROM DimProductCategory\n      WHERE EnglishProductCategoryName = 'Bikes'\n    )\n  )\n);"
  },
  {
    id: 440,
    level: "Advanced",
    topic: "Subqueries & CTEs",
    question: "Write a query utilizing a CTE named CustomerFirstPurchase that isolates the absolute minimum OrderDateKey for each customer, then use that to compute how many customers made their first purchase in 2012.",
    hint: "Group by CustomerKey to find the minimum date key in the CTE, then match to 2012 timeline prefixes in the outer statement.",
    concept: "Cohort timeline progression profiling",
    answer: "WITH CustomerFirstPurchase AS (\n  SELECT CustomerKey, MIN(OrderDateKey) AS FirstPurchaseDateKey\n  FROM FactInternetSales\n  GROUP BY CustomerKey\n)\nSELECT COUNT(*) AS NewCustomersIn2012\nFROM CustomerFirstPurchase\nWHERE LEFT(FirstPurchaseDateKey, 4) = '2012';"
  },

  // Advanced Window Functions (441 - 470)
  {
    id: 441,
    level: "Advanced",
    topic: "Window Functions",
    question: "Using the PERCENT_RANK() window operation, compute the relative continuous percentage rank of each product's ListPrice inside its specific ProductSubcategoryKey.",
    hint: "Apply PERCENT_RANK() OVER(PARTITION BY ProductSubcategoryKey ORDER BY ListPrice ASC) in your select list.",
    concept: "Windowed relative percentile ranking",
    answer: "SELECT ProductKey, ProductSubcategoryKey, EnglishProductName, ListPrice,\n  PERCENT_RANK() OVER(PARTITION BY ProductSubcategoryKey ORDER BY ListPrice ASC) AS PricePercentRank\nFROM DimProduct\nWHERE ProductSubcategoryKey IS NOT NULL;"
  },
  {
    id: 442,
    level: "Advanced",
    topic: "Window Functions",
    question: "Calculate the exact cumulative distribution metric CUME_DIST() for customer incomes inside DimCustomer, partitioned by EnglishOccupation and ordered by YearlyIncome.",
    hint: "Incorporate CUME_DIST() OVER(PARTITION BY EnglishOccupation ORDER BY YearlyIncome ASC) to find percentile locations.",
    concept: "Socio-economic cumulative distribution metrics",
    answer: "SELECT CustomerKey, EnglishOccupation, YearlyIncome,\n  CUME_DIST() OVER(PARTITION BY EnglishOccupation ORDER BY YearlyIncome ASC) AS IncomeCumulativeDistribution\nFROM DimCustomer;"
  },
  {
    id: 443,
    level: "Advanced",
    topic: "Window Functions",
    question: "Find the running average of SalesAmount in FactInternetSales over a window containing the current transaction line and the preceding 10 order entries, sorted chronologically.",
    hint: "Use AVG(SalesAmount) OVER(ORDER BY OrderDateKey, SalesOrderNumber ROWS BETWEEN 10 PRECEDING AND CURRENT ROW).",
    concept: "Continuous sliding window accumulation",
    answer: "SELECT SalesOrderNumber, OrderDateKey, SalesAmount,\n  AVG(SalesAmount) OVER(ORDER BY OrderDateKey, SalesOrderNumber ROWS BETWEEN 10 PRECEDING AND CURRENT ROW) AS RollingAverageAmount\nFROM FactInternetSales;"
  },
  {
    id: 444,
    level: "Advanced",
    topic: "Window Functions",
    question: "Using LEAD() with a custom default fallback parameter, look forward 2 lines ahead to find the next scheduled target quota in FactSalesQuota, returning 0 if no future target exists.",
    hint: "Use LEAD(SalesAmountQuota, 2, 0) OVER(PARTITION BY EmployeeKey ORDER BY CalendarYear ASC) to step forward securely.",
    concept: "Positional lookahead parameters routing",
    answer: "SELECT EmployeeKey, CalendarYear, SalesAmountQuota,\n  LEAD(SalesAmountQuota, 2, 0) OVER(PARTITION BY EmployeeKey ORDER BY CalendarYear ASC) AS FutureTwoPeriodQuota\nFROM FactSalesQuota;"
  },
  {
    id: 445,
    level: "Advanced",
    topic: "Window Functions",
    question: "Compute an inline percentage ranking ratio that divides each employee's VacationHours by the maximum vacation hours recorded across their specific DepartmentName group, using window blocks.",
    hint: "Divide VacationHours by MAX(VacationHours) OVER(PARTITION BY DepartmentName) within your select column fields.",
    concept: "Proportional scale variable mapping",
    answer: "SELECT EmployeeKey, DepartmentName, LastName, VacationHours,\n  (VacationHours * 100.0) / MAX(VacationHours) OVER(PARTITION BY DepartmentName) AS VacationRatioToDeptMaxPct\nFROM DimEmployee;"
  },
  {
    id: 446,
    level: "Advanced",
    topic: "Window Functions",
    question: "Identify any transactional records inside FactResellerSales whose individual quantity OrderQuantity matches or exceeds the 90th percentile of volume computed across that territory group using NTILE.",
    hint: "Separate entries into 10 buckets using NTILE(10) OVER(PARTITION BY SalesTerritoryKey ORDER BY OrderQuantity ASC) inside a subquery.",
    concept: "High-volume outlier group filtering",
    answer: "SELECT SalesOrderNumber, SalesTerritoryKey, OrderQuantity\nFROM (\n  SELECT SalesOrderNumber, SalesTerritoryKey, OrderQuantity,\n    NTILE(10) OVER(PARTITION BY SalesTerritoryKey ORDER BY OrderQuantity ASC) AS DecileBucket\n  FROM FactResellerSales\n) AS StagedDeciles\nWHERE DecileBucket = 10;"
  },
  {
    id: 447,
    level: "Advanced",
    topic: "Window Functions",
    question: "Calculate the differences separating current financial ledger amounts in FactFinance from the average budget recorded across all active scenarios for that specific AccountKey.",
    hint: "Incorporate Amount minus AVG(Amount) OVER(PARTITION BY AccountKey) within your ledger matrix outputs.",
    concept: "Windowed inline profile comparison models",
    answer: "SELECT FinanceKey, AccountKey, ScenarioKey, Amount,\n  Amount - AVG(Amount) OVER(PARTITION BY AccountKey) AS VarianceFromAccountAverage\nFROM FactFinance;"
  },
  {
    id: 448,
    level: "Advanced",
    topic: "Window Functions",
    question: "Generate an unbroken dense chronological rank index value DENSE_RANK() tracking active promotion lifecycles inside DimPromotion based upon their complete lifespan duration in days.",
    hint: "Apply DENSE_RANK() OVER(ORDER BY DATEDIFF(DAY, StartDate, EndDate) DESC) within marketing campaigns checks.",
    concept: "Continuous analytical tier ranking",
    answer: "SELECT PromotionKey, EnglishPromotionName, DATEDIFF(DAY, StartDate, EndDate) AS CampaignLifespan,\n  DENSE_RANK() OVER(ORDER BY DATEDIFF(DAY, StartDate, EndDate) DESC) AS DurationDenseRank\nFROM DimPromotion\nWHERE StartDate IS NOT NULL AND EndDate IS NOT NULL;"
  },
  {
    id: 449,
    level: "Advanced",
    topic: "Window Functions",
    question: "Compute a running multi-variable metric summation accumulating total dynamic Freight charges inside FactInternetSales across subsequent months, partitioned strictly by CurrencyKey.",
    hint: "Combine summing operators with ordered date intervals OVER(PARTITION BY CurrencyKey ORDER BY OrderDateKey ASC).",
    concept: "Continuous value accumulation dynamics",
    answer: "SELECT SalesOrderNumber, CurrencyKey, OrderDateKey, Freight,\n  SUM(Freight) OVER(PARTITION BY CurrencyKey ORDER BY OrderDateKey ASC ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS CumulativeFreightByCurrency\nFROM FactInternetSales;"
  },
  {
    id: 450,
    level: "Advanced",
    topic: "Window Functions",
    question: "Isolate the absolute third oldest transactional entry record line recorded for each reseller node inside FactResellerSales utilizing analytical sequence partitioning filters.",
    hint: "Construct an internal nested wrapper declaring ROW_NUMBER() OVER(PARTITION BY ResellerKey ORDER BY OrderDateKey ASC) matching index 3.",
    concept: "Windowed sequence index partitioning",
    answer: "SELECT ResellerKey, SalesOrderNumber, OrderDateKey\nFROM (\n  SELECT ResellerKey, SalesOrderNumber, OrderDateKey,\n    ROW_NUMBER() OVER(PARTITION BY ResellerKey ORDER BY OrderDateKey ASC) AS OrderSequenceID\n  FROM FactResellerSales\n) AS PartitionedHistory\nWHERE OrderSequenceID = 3;"
  },
  {
    id: 451,
    level: "Advanced",
    topic: "Window Functions",
    question: "Using window functions, calculate the difference between the current product's ListPrice and the average price of the 2 most expensive products in the same subcategory.",
    hint: "Use a CTE to first find the prices, or compute ranking and average over a customized partition frame.",
    concept: "Complex window aggregation filters",
    answer: "WITH RankedProducts AS (\n  SELECT ProductKey, ProductSubcategoryKey, EnglishProductName, ListPrice,\n    AVG(ListPrice) OVER(PARTITION BY ProductSubcategoryKey ORDER BY ListPrice DESC ROWS BETWEEN UNBOUNDED PRECEDING AND 1 FOLLOWING) AS HighPriceAvg\n  FROM DimProduct\n  WHERE ListPrice IS NOT NULL\n) \nSELECT ProductKey, ProductSubcategoryKey, EnglishProductName, ListPrice, ListPrice - HighPriceAvg AS DynamicPriceDelta\nFROM RankedProducts;"
  },
  {
    id: 452,
    level: "Advanced",
    topic: "Window Functions",
    question: "Compute the dynamic variance between each call volume metric in FactCallCenter and the absolute peak volume ever recorded on that same day name across all years.",
    hint: "Join with DimDate, use MAX(Calls) OVER(PARTITION BY EnglishDayNameOfWeek) to find historical maximums, and subtract.",
    concept: "Windowed inline baseline comparison models",
    answer: "SELECT f.DateKey, d.EnglishDayNameOfWeek, f.Calls,\n  MAX(f.Calls) OVER(PARTITION BY d.EnglishDayNameOfWeek) - f.Calls AS VarianceFromDayNamePeak\nFROM FactCallCenter f\nINNER JOIN DimDate d ON f.DateKey = d.DateKey;"
  },
  {
    id: 453,
    level: "Advanced",
    topic: "Window Functions",
    question: "Determine the rolling sum of inventory adjustments inside FactProductInventory across a sliding timeline frame bounded by exactly 1 preceding snapshot record and 1 subsequent record line.",
    hint: "Define explicit floating frames parameters utilizing ROWS BETWEEN 1 PRECEDING AND 1 FOLLOWING definitions.",
    concept: "Continuous sliding window accumulation",
    answer: "SELECT ProductKey, DateKey, UnitsBalance,\n  SUM(UnitsBalance) OVER(PARTITION BY ProductKey ORDER BY DateKey ROWS BETWEEN 1 PRECEDING AND 1 FOLLOWING) AS ThreePeriodSlidingStockSum\nFROM FactProductInventory;"
  },
  {
    id: 454,
    level: "Advanced",
    topic: "Window Functions",
    question: "Isolate the first transaction date and total spend of customers who have achieved the top rank position based on lifetime sales numbers inside FactInternetSales.",
    hint: "Rank customers using RANK() based on SUM(SalesAmount) inside a CTE, then filter for rank position 1 in the outer scope.",
    concept: "Windowed structural partitioning logic",
    answer: "WITH CustomerSalesRankings AS (\n  SELECT CustomerKey, SUM(SalesAmount) AS TotalSpend,\n    RANK() OVER(ORDER BY SUM(SalesAmount) DESC) AS SpendRank\n  FROM FactInternetSales\n  GROUP BY CustomerKey\n)\nSELECT r.CustomerKey, c.LastName, r.TotalSpend\nFROM CustomerSalesRankings r\nINNER JOIN DimCustomer c ON r.CustomerKey = c.CustomerKey\nWHERE r.SpendRank = 1;"
  },
  {
    id: 455,
    level: "Advanced",
    topic: "Window Functions",
    question: "Using LAG(), write a query that evaluates shift transitions inside FactCallCenter to calculate the difference in LevelOneOperators counts between consecutive chronological dates for the day shift.",
    hint: "Filter for 'day' shifts, and apply LAG(LevelOneOperators, 1) ordered by DateKey.",
    concept: "Chronological sequence offset comparisons",
    answer: "SELECT DateKey, Shift, LevelOneOperators,\n  LevelOneOperators - LAG(LevelOneOperators, 1) OVER(ORDER BY DateKey ASC) AS ShiftStaffingDelta\nFROM FactCallCenter\nWHERE Shift LIKE 'day%';"
  },
  {
    id: 456,
    level: "Advanced",
    topic: "Window Functions",
    question: "Determine proportional scale contribution profiles inside FactFinance by showing each account amount as a percentage of the total amount for that scenario across all accounts.",
    hint: "Divide Amount by SUM(Amount) OVER(PARTITION BY ScenarioKey) * 100.0 within your projections calculations pipelines.",
    concept: "Proportional scale value assessment metrics",
    answer: "SELECT FinanceKey, ScenarioKey, AccountKey, Amount,\n  (Amount / SUM(Amount) OVER(PARTITION BY ScenarioKey)) * 100.0 AS PercentContributionToScenario\nFROM FactFinance;"
  },
  {
    id: 457,
    level: "Advanced",
    topic: "Window Functions",
    question: "Find the unbroken row sequence indexing over all employee data files in DimEmployee, ordered strictly from the longest tenure length to the shortest.",
    hint: "Apply ROW_NUMBER() OVER(ORDER BY HireDate ASC) to map workers by seniority rankings timelines flawlessly.",
    concept: "Windowed sequence index partitioning",
    answer: "SELECT EmployeeKey, FirstName, LastName, HireDate,\n  ROW_NUMBER() OVER(ORDER BY HireDate ASC) AS SenioritySequenceIndex\nFROM DimEmployee;"
  },
  {
    id: 458,
    level: "Advanced",
    topic: "Window Functions",
    question: "Using window aggregates, identify products in DimProduct whose individual StandardCost remains strictly higher than the average cost of their specific color bucket.",
    hint: "Construct an inline average field using AVG(StandardCost) OVER(PARTITION BY Color) inside a nested subquery wrapper layer.",
    concept: "Windowed inline profile comparison models",
    answer: "SELECT ProductKey, EnglishProductName, Color, StandardCost\nFROM (\n  SELECT ProductKey, EnglishProductName, Color, StandardCost,\n    AVG(StandardCost) OVER(PARTITION BY Color) AS ColorAvgCost\n  FROM DimProduct\n) AS ColorCostAudit\nWHERE StandardCost > ColorAvgCost;"
  },
  {
    id: 459,
    level: "Advanced",
    topic: "Window Functions",
    question: "Calculate the exact dynamic rank position inside each sovereign country region mapping for resellers inside DimReseller based upon corporate AnnualSales projections.",
    hint: "Join with DimGeography, then apply DENSE_RANK() OVER(PARTITION BY CountryRegionName ORDER BY AnnualSales DESC) structures.",
    concept: "Continuous analytical tier ranking",
    answer: "SELECT r.ResellerKey, r.ResellerName, g.CountryRegionName, r.AnnualSales,\n  DENSE_RANK() OVER(PARTITION BY g.CountryRegionName ORDER BY r.AnnualSales DESC) AS NationalSalesVolumeRank\nFROM DimReseller r\nINNER JOIN DimGeography g ON r.GeographyKey = g.GeographyKey\nWHERE r.AnnualSales IS NOT NULL;"
  },
  {
    id: 460,
    level: "Advanced",
    topic: "Window Functions",
    question: "Compute an absolute moving total mapping dynamic aggregate tax metrics inside FactInternetSales spanning the current line transaction and the subsequent 3 order lines entries.",
    hint: "Incorporate explicit window boundaries constraints definitions utilizing ROWS BETWEEN CURRENT ROW AND 3 FOLLOWING directives.",
    concept: "Continuous sliding window accumulation",
    answer: "SELECT SalesOrderNumber, OrderDateKey, TaxAmt,\n  SUM(TaxAmt) OVER(ORDER BY OrderDateKey, SalesOrderNumber ROWS BETWEEN CURRENT ROW AND 3 FOLLOWING) AS ForwardAccumulatedTax\nFROM FactInternetSales;"
  },

  // Advanced Metadata, DDL, Views & PIVOT (461 - 480)
  {
    id: 461,
    level: "Advanced",
    topic: "PIVOT & Architecture",
    question: "Execute a structural PIVOT transposition query model to rotate transactional FactResellerSales records lines turning unique BusinessType handles ('Warehouse', 'Value Added Reseller', 'Specialty Bike Shop') into structural spreadsheet column slots displaying total compiled SalesAmount metrics.",
    hint: "Synthesize large dimensional matrix configurations maps variables fields parsing source subqueries straight into specialized PIVOT operator arguments structures lines profiles.",
    concept: "Cross-tabular matrix rotation architectures",
    answer: "SELECT CalendarYear, [Warehouse], [Value Added Reseller], [Specialty Bike Shop]\nFROM (\n  SELECT d.CalendarYear, r.BusinessType, f.SalesAmount\n  FROM FactResellerSales f\n  INNER JOIN DimReseller r ON f.ResellerKey = r.ResellerKey\n  INNER JOIN DimDate d ON f.OrderDateKey = d.DateKey\n) AS SourceData\nPIVOT (\n  SUM(SalesAmount) FOR BusinessType IN ([Warehouse], [Value Added Reseller], [Specialty Bike Shop])\n) AS PivotTable\nORDER BY CalendarYear;"
  },
  {
    id: 462,
    level: "Advanced",
    topic: "Views",
    question: "Write an optimized schema declaration script to deploy an enterprise-grade materialized view named vw_StagedFinancialLedger balances tracking columns summaries.",
    hint: "Leverage traditional view creation structures with proper column name declarations encapsulating clean underlying inner join sets.",
    concept: "Abstracted view schema architecture",
    answer: "CREATE VIEW vw_StagedFinancialLedger AS\nSELECT o.OrganizationName, a.AccountDescription, s.ScenarioName, SUM(f.Amount) AS AggregatedBalanceTotal\nFROM FactFinance f\nINNER JOIN DimOrganization o ON f.OrganizationKey = o.OrganizationKey\nINNER JOIN DimAccount a ON f.AccountKey = a.AccountKey\nINNER JOIN DimScenario s ON f.ScenarioKey = s.ScenarioKey\nGROUP BY o.OrganizationName, a.AccountDescription, s.ScenarioName;"
  },
  {
    id: 463,
    level: "Advanced",
    topic: "Metadata & Catalogues",
    question: "Query the system information views sys.tables and sys.columns to generate an active column inventory trace detailing all text data types and lengths configured across FactInternetSales tables components.",
    hint: "Filter parameters matching table object IDs matching the target fact store directly via metadata catalogs rules logic configurations.",
    concept: "Metadata system catalog diagnostics",
    answer: "SELECT t.name AS TableName, c.name AS ColumnName, ty.name AS DataType, c.max_length AS DataByteCapacity\nFROM sys.tables t\nINNER JOIN sys.columns c ON t.object_id = c.object_id\nINNER JOIN sys.types ty ON c.user_type_id = ty.user_type_id\nWHERE t.name = 'FactInternetSales';"
  },
  {
    id: 464,
    level: "Advanced",
    topic: "DDL",
    question: "Write a complete schema modification script ALTER TABLE adding a secondary tracking index flag column named MetadataRevisionCode and a safety check constraint over values lengths to DimProduct.",
    hint: "Apply precise ALTER DDL commands adding properties specifications parameters and validation rules constraints safely without breaking baseline schema configurations.",
    concept: "Relational schema modifications frameworks",
    answer: "ALTER TABLE DimProduct ADD MetadataRevisionCode VARCHAR(10) NULL;\nALTER TABLE DimProduct ADD CONSTRAINT CHK_MetadataRevisionCode_Format CHECK (MetadataRevisionCode LIKE 'REV-%');"
  },
  {
    id: 465,
    level: "Advanced",
    topic: "PIVOT & Architecture",
    question: "Rotate FactCallCenter histories using an explicit PIVOT statement to display total AbandonedCalls across independent column slots representing individual shift names context.",
    hint: "Isolate processing data mapping source tracks, defining columns corresponding strictly to text codes Shift elements entries.",
    concept: "Cross-tabular matrix rotation architectures",
    answer: "SELECT DateKey, [daytime], [backside], [nightfall]\nFROM (\n  SELECT DateKey, Shift, AbandonedCalls\n  FROM FactCallCenter\n) AS CallCenterLogs\nPIVOT (\n  SUM(AbandonedCalls) FOR Shift IN ([daytime], [backside], [nightfall])\n) AS RotatedShifts;"
  },
  {
    id: 466,
    level: "Advanced",
    topic: "Views",
    question: "Create a highly abstracted view layout component named vw_ActiveWorkforceRegistry mapping out comprehensive human resource profiles paired with geographic regional data blocks variables.",
    hint: "Bind strategic multi-table join connections securely into a named view mask to prevent downstream logic duplication variables.",
    concept: "Abstracted view schema architecture",
    answer: "CREATE VIEW vw_ActiveWorkforceRegistry AS\nSELECT e.EmployeeKey, e.FirstName + ' ' + e.LastName AS EmployeeFullName, e.Title, t.SalesTerritoryRegion, t.SalesTerritoryCountry\nFROM DimEmployee e\nLEFT JOIN DimSalesTerritory t ON e.SalesTerritoryKey = t.SalesTerritoryKey\nWHERE e.Status = 'Current';"
  },
  {
    id: 467,
    level: "Advanced",
    topic: "Metadata & Catalogues",
    question: "Query the system views sys.foreign_keys and sys.foreign_key_columns to locate every relational constraint anchor link binding tables straight into DimProduct primary structures mappings.",
    hint: "Trace metadata mapping connections maps profiles leveraging dynamic system tracing parent object identifier parameters checking scripts.",
    concept: "Metadata system catalog diagnostics",
    answer: "SELECT fk.name AS ForeignKeyConstraintName, OBJECT_NAME(fk.parent_object_id) AS ParentTablePath, OBJECT_NAME(fk.referenced_object_id) AS ReferencedTablePath\nFROM sys.foreign_keys fk\nWHERE fk.referenced_object_id = OBJECT_ID('DimProduct');"
  },
  {
    id: 468,
    level: "Advanced",
    topic: "DDL",
    question: "Construct a DDL execution layout deploying a safe system staging table named EnterpriseOperationalAuditTrail equipped with identity constraints fields mapping default values markers timestamps flawlessly.",
    hint: "Establish unified auditing overview blueprints tracking transaction operations layouts via straightforward constraint parameters architectures engineering logic rules.",
    concept: "Relational blueprint schema engineering",
    answer: "CREATE TABLE EnterpriseOperationalAuditTrail (\n  AuditRecordIndexID BIGINT IDENTITY(1,1) PRIMARY KEY,\n  SystemUserIdentifier NVARCHAR(100) DEFAULT SUSER_SNAME(),\n  ExecutedActionDescriptor VARCHAR(50) NOT NULL,\n  AffectedSourceTableTarget VARCHAR(100) NOT NULL,\n  TransactionRecordTimestamp DATETIME DEFAULT CURRENT_TIMESTAMP\n);"
  },
  {
    id: 469,
    level: "Advanced",
    topic: "PIVOT & Architecture",
    question: "Pivot FactInternetSales data metrics to render an executive matrix showing total freight spending values Charges across independent horizontal column blocks mapped to calendar quarters loops context.",
    hint: "Incorporate date dimension joins isolating quarter indicators before applying transposing commands parameters filters logic.",
    concept: "Cross-tabular matrix rotation architectures",
    answer: "SELECT CalendarYear, [1] AS Q1_Freight, [2] AS Q2_Freight, [3] AS Q3_Freight, [4] AS Q4_Freight\nFROM (\n  SELECT d.CalendarYear, d.CalendarQuarter, f.Freight\n  FROM FactInternetSales f\n  INNER JOIN DimDate d ON f.OrderDateKey = d.DateKey\n) AS BaseSource\nPIVOT (\n  SUM(Freight) FOR CalendarQuarter IN ([1], [2], [3], [4])\n) AS QuarterPivotMatrix;"
  },
  {
    id: 470,
    level: "Advanced",
    topic: "Metadata & Catalogues",
    question: "Query sys.indexes and sys.index_columns to find all indexing tracking assets deployed active over the primary data boundaries configurations inside FactInternetSales maps logs fields.",
    hint: "Examine backend engineering structural layout indexes tracking definitions profiles utilizing dynamic dynamic system catalog identifiers parsing formulas.",
    concept: "Metadata system catalog diagnostics",
    answer: "SELECT idx.name AS IndexName, idx.type_desc AS IndexType, col.name AS ColumnIndexedName\nFROM sys.indexes idx\nINNER JOIN sys.index_columns ic ON idx.object_id = ic.object_id AND idx.index_id = ic.index_id\nINNER JOIN sys.columns col ON ic.object_id = col.object_id AND ic.column_id = col.column_id\nWHERE idx.object_id = OBJECT_ID('FactInternetSales');"
  },

  // Programmatic T-SQL: Advanced Procedures, Functions, and Triggers (471 - 500)
  {
    id: 471,
    level: "Advanced",
    topic: "Programmatic T-SQL",
    question: "Create a compiled database stored procedure entity object module container named usp_ReconcileResellerPaymentBracket parsing dynamic corporate keys variables loops parameters to perform bulk financial validations cleanly.",
    hint: "Encapsulate procedural database script paths inside standard named procedure definitions incorporating conditional exceptions logic handlers metrics updates.",
    concept: "Procedural logic encapsulation and variable handling",
    answer: "CREATE PROCEDURE usp_ReconcileResellerPaymentBracket\n  @TargetResellerKey INT,\n  @AdjustmentFactor DECIMAL(5,2)\nAS\nBEGIN\n  SET NOCOUNT ON;\n  IF NOT EXISTS (SELECT 1 FROM DimReseller WHERE ResellerKey = @TargetResellerKey)\n    THROW 53000, 'Relational exception identity unverified: Target business channel record missing.', 1;\n  UPDATE DimReseller \n  SET MinPaymentAmount = COALESCE(MinPaymentAmount, 0) * @AdjustmentFactor\n  WHERE ResellerKey = @TargetResellerKey;\nEND;"
  },
  {
    id: 472,
    level: "Advanced",
    topic: "Programmatic T-SQL",
    question: "Develop a multi-statement table-valued function (MSTVF) named fn_CompileWorkerBonusMatrix parsing sick leave milestones integers to generate explicit structured table datasets maps variables outputs.",
    hint: "An MSTVF explicitly declares its schema structure outputs parameters tracking lists before processing transaction loops parameters commands rules logic configurations.",
    concept: "Functional schema abstraction and collection routing",
    answer: "CREATE FUNCTION fn_CompileWorkerBonusMatrix\n  (@SickLeaveLimitHours INT)\nRETURNS @BonusDistributionMatrix TABLE (\n  StaffIdentityKey INT,\n  CalculatedBonusAllotment MONEY,\n  OperationalStatus VARCHAR(30)\n)\nAS\nBEGIN\n  INSERT INTO @BonusDistributionMatrix\n  SELECT EmployeeKey, \n    IIF(SickLeaveHours <= @SickLeaveLimitHours, 1000.00, 250.00),\n    IIF(VacationHours > 50, 'High Merit Tier Allocation', 'Standard Auxiliary Staff Baseline')\n  FROM DimEmployee;\n  RETURN;\nEND;"
  },
  {
    id: 473,
    level: "Advanced",
    topic: "Programmatic T-SQL",
    question: "Program an INSTEAD OF trigger framework component named trg_GuardProductCategoryDeletions preventing standard truncation tasks over target product categories tables profiles metadata archives.",
    hint: "Leverage standard database automated monitoring trigger layout assignments checking context variables from overlapping DELETED memory models layouts structures.",
    concept: "Proactive behavioral schema validation overrides",
    answer: "CREATE TRIGGER trg_GuardProductCategoryDeletions\nON DimProductCategory\nINSTEAD OF DELETE\nAS\nBEGIN\n  SET NOCOUNT ON;\n  RAISERROR('Infrastructure Guard Alert: Administrative deletion parameters over lookup taxonomy dimensions strictly prohibited.', 16, 1);\nEND;"
  },
  {
    id: 474,
    level: "Advanced",
    topic: "Programmatic T-SQL",
    question: "Write an optimized user-defined scalar function named fn_AssessRegionalOrderQuantity Density tracking total items volumes derived from specific geographic points lookups identifiers parameters constraints.",
    hint: "Leverage standard functional abstraction return arguments wrapping query execution engines commands logic syntax setups structures variables loops.",
    concept: "Functional schema abstraction and collection routing",
    answer: "CREATE FUNCTION fn_AssessRegionalOrderQuantityDensity\n  (@CheckSalesTerritoryKey INT)\nRETURNS BIGINT\nAS\nBEGIN\n  DECLARE @TotalItemVolume BIGINT;\n  SELECT @TotalItemVolume = COALESCE(SUM(CAST(OrderQuantity AS BIGINT)), 0)\n  FROM FactInternetSales\n  WHERE SalesTerritoryKey = @CheckSalesTerritoryKey;\n  RETURN @TotalItemVolume;\nEND;"
  },
  {
    id: 475,
    level: "Advanced",
    topic: "Programmatic T-SQL",
    question: "Develop an advanced stored procedure blueprint containing nested try-catch structures validating transaction rollbacks upon system context operations exceptions triggers metrics partitions fields.",
    hint: "Isolate individual human asset transaction processing tracks patterns variables sets flawlessly via clear named staging rollbacks instructions parameters validations.",
    concept: "Procedural logic encapsulation and error management",
    answer: "CREATE PROCEDURE usp_ExecuteSafeQuotaTargetModification\n  @TargetEmployeeKey INT,\n  @TargetCalendarYear INT,\n  @NewQuotaValue MONEY\nAS\nBEGIN\n  SET NOCOUNT ON;\n  BEGIN TRY\n    BEGIN TRANSACTION;\n    IF @NewQuotaValue < 0\n      THROW 54000, 'Validation constraint alert: Quota metrics allocations metrics boundaries cannot drop below zero parameters values.', 1;\n    UPDATE FactSalesQuota SET SalesAmountQuota = @NewQuotaValue WHERE EmployeeKey = @TargetEmployeeKey AND CalendarYear = @TargetCalendarYear;\n    COMMIT TRANSACTION;\n  END TRY\n  BEGIN CATCH\n    IF @@TRANCOUNT > 0 ROLLBACK TRANSACTION;\n    DECLARE @ErrorMessage NVARCHAR(4000) = ERROR_MESSAGE();\n    RAISERROR(@ErrorMessage, 16, 1);\n  END CATCH;\nEND;"
  },
  {
    id: 476,
    level: "Advanced",
    topic: "Programmatic T-SQL",
    question: "Create an AFTER UPDATE trigger on DimReseller that records modifications to AnnualSales into an audit table called ResellerSalesAudit.",
    hint: "Use the DELETED and INSERTED pseudo-tables inside the trigger to capture before and after field values.",
    concept: "Automated data audit logging",
    answer: "CREATE TABLE ResellerSalesAudit (\n  AuditID INT IDENTITY PRIMARY KEY,\n  ResellerKey INT,\n  OldAnnualSales MONEY,\n  NewAnnualSales MONEY,\n  ChangedAt DATETIME DEFAULT GETDATE()\n);\nGO\nCREATE TRIGGER trg_ResellerSalesUpdate\nON DimReseller\nAFTER UPDATE\nAS\nBEGIN\n  SET NOCOUNT ON;\n  IF UPDATE(AnnualSales)\n  BEGIN\n    INSERT INTO ResellerSalesAudit (ResellerKey, OldAnnualSales, NewAnnualSales)\n    SELECT i.ResellerKey, d.AnnualSales, i.AnnualSales\n    FROM INSERTED i\n    INNER JOIN DELETED d ON i.ResellerKey = d.ResellerKey;\n  END;\nEND;"
  },
  {
    id: 477,
    level: "Advanced",
    topic: "Programmatic T-SQL",
    question: "Develop a stored procedure named usp_BatchUpdateCallCenterMetrics that processes xml-formatted operational call data strings and transforms them into rows inside FactCallCenter.",
    hint: "Use the nodes() method over xml variables to unpack structured rows inside a relational INSERT block query.",
    concept: "Unstructured-to-relational batch transformation",
    answer: "CREATE PROCEDURE usp_BatchUpdateCallCenterMetrics\n  @XmlData XML\nAS\nBEGIN\n  SET NOCOUNT ON;\n  INSERT INTO FactCallCenter (DateKey, Shift, Calls, WageType)\n  SELECT \n    T.c.value('(DateKey)[1]', 'INT'),\n    T.c.value('(Shift)[1]', 'VARCHAR(20)'),\n    T.c.value('(Calls)[1]', 'INT'),\n    T.c.value('(WageType)[1]', 'VARCHAR(20)')\n  FROM @XmlData.nodes('/CallCenterRoot/Record') AS T(c);\nEND;"
  },
  {
    id: 478,
    level: "Advanced",
    topic: "Programmatic T-SQL",
    question: "Write an inline user-defined function named fn_GetCustomerPurchaseRecency returning the total number of elapsed days between a customer's last order date and a reference date parameter.",
    hint: "Use DATEDIFF(DAY, MAX(OrderDateKey converted to datetime), @ReferenceDate) inside an iTVF statement pattern.",
    concept: "Functional database abstraction workflows",
    answer: "CREATE FUNCTION fn_GetCustomerPurchaseRecency\n  (@TargetCustomerKey INT, @ReferenceDate DATETIME)\nRETURNS TABLE\nAS\nRETURN (\n  SELECT DATEDIFF(DAY, MAX(CONVERT(DATETIME, CAST(OrderDateKey AS VARCHAR(8)), 112)), @ReferenceDate) AS DaysSinceLastPurchase\n  FROM FactInternetSales\n  WHERE CustomerKey = @TargetCustomerKey\n);"
  },
  {
    id: 479,
    level: "Advanced",
    topic: "Programmatic T-SQL",
    question: "Create a stored procedure with an integer return status value that evaluates promotion efficacy metrics and returns code 1 if a promotion generated positive profit margins or 0 if it lost capital.",
    hint: "Compare total SalesAmount against TotalProductCost inside FactInternetSales for a given PromotionKey and execute RETURN blocks.",
    concept: "Procedural status codes execution architectures",
    answer: "CREATE PROCEDURE usp_EvaluatePromotionProfitability\n  @CheckPromotionKey INT\nAS\nBEGIN\n  SET NOCOUNT ON;\n  DECLARE @NetMargin MONEY;\n  SELECT @NetMargin = SUM(SalesAmount - TotalProductCost) FROM FactInternetSales WHERE PromotionKey = @CheckPromotionKey;\n  IF @NetMargin > 0\n    RETURN 1;\n  ELSE\n    RETURN 0;\nEND;"
  },
  {
    id: 480,
    level: "Advanced",
    topic: "Programmatic T-SQL",
    question: "Program a dynamic schema deployment architecture procedure that replicates metadata definition scripts using cursor loops across system databases records mappings.",
    hint: "Declare an explicit CURSOR over target columns lookup metrics fields, fetching records into local loop parameters variables safely.",
    concept: "Programmatic cursors and dynamic scripting engines",
    answer: "CREATE PROCEDURE usp_IterateAndLogProductModelNames\nAS\nBEGIN\n  SET NOCOUNT ON;\n  DECLARE @ModelNameText NVARCHAR(50);\n  DECLARE ModelCursor CURSOR FOR \n    SELECT DISTINCT ModelName FROM DimProduct WHERE ModelName IS NOT NULL;\n  OPEN ModelCursor;\n  FETCH NEXT FROM ModelCursor INTO @ModelNameText;\n  WHILE @@FETCH_STATUS = 0\n  BEGIN\n    -- Print statement functions as an abstract simulation logging step within the loop infrastructure scope\n    PRINT 'Processing production matrix tracks parameters profiles for catalog model: ' + @ModelNameText;\n    FETCH NEXT FROM ModelCursor INTO @ModelNameText;\n  END;\n  CLOSE ModelCursor;\n  DEALLOCATE ModelCursor;\nEND;"
  },

  // Query Tuning, Architecture, Optimization, and DMVs (481 - 500)
  {
    id: 481,
    level: "Advanced",
    topic: "Query Tuning & DMVs",
    question: "Query sys.dm_db_index_physical_stats to identify physical fragmentation metrics percentages across all database indexes deployed active over tables inside the current storage blueprint.",
    hint: "Pass database and table object identifiers parameters definitions cleanly into dynamic system table-valued optimization functions pipelines.",
    concept: "Physical schema tuning index architectures",
    answer: "SELECT OBJECT_NAME(object_id) AS TableName, index_id, avg_fragmentation_in_percent AS FragmentationPct, page_count AS PhysicalPageVolume\nFROM sys.dm_db_index_physical_stats(DB_ID(), NULL, NULL, NULL, 'LIMITED')\nWHERE avg_fragmentation_in_percent > 10.0\nORDER BY FragmentationPct DESC;"
  },
  {
    id: 482,
    level: "Advanced",
    topic: "Query Tuning & DMVs",
    question: "Incorporate optimization diagnostics instrumentation metrics toggles utilizing SET STATISTICS TIME ON straight to benchmark total CPU milliseconds overhead derived across complex general ledger aggregation tasks.",
    hint: "Prepend standard system telemetry parameter adjustments handles variables straight to execution paths fields tracking profiling hardware resource overhead benchmarks frames.",
    concept: "Telemetry infrastructure profiling engines",
    answer: "SET STATISTICS TIME ON;\nSELECT AccountKey, ScenarioKey, AVG(Amount) FROM FactFinance GROUP BY AccountKey, ScenarioKey;\nSET STATISTICS TIME OFF;"
  },
  {
    id: 483,
    level: "Advanced",
    topic: "Query Tuning & DMVs",
    question: "Refactor a performance-crippling correlated subquery inside FactInternetSales tracking customer line peaks down into a high-speed relational window analytical layout alternative optimizing hardware workloads flawlessly.",
    hint: "Replace slow conditional loops scanning patterns with robust inline OVER metrics compilation engines properties processing vectors flawlessly.",
    concept: "Execution path refactoring optimization benchmarks",
    answer: "-- Performance optimized analytical alternative replacing slow loops\nSELECT CustomerKey, SalesOrderNumber, SalesAmount\nFROM (\n  SELECT CustomerKey, SalesOrderNumber, SalesAmount,\n    ROW_NUMBER() OVER(PARTITION BY CustomerKey ORDER BY SalesAmount DESC) AS TransactionRankIndex\n  FROM FactInternetSales\n) AS PartitionedRankedSales\nWHERE TransactionRankIndex = 1;"
  },
  {
    id: 484,
    level: "Advanced",
    topic: "Query Tuning & DMVs",
    question: "Apply explicit execution planner directive hints inside the tail configuration boundary layer forcing a nested loop association layout while preventing multi-core engine splitting using OPTION (LOOP JOIN, MAXDOP 1).",
    hint: "Append the specific OPTION command definition pattern directly to the terminal endpoint of the parent SELECT block to overwrite core query analyzer mapping selections.",
    concept: "Execution path hint injectors",
    answer: "SELECT f.SalesOrderNumber, p.EnglishProductName\nFROM FactInternetSales f\nINNER JOIN DimProduct p ON f.ProductKey = p.ProductKey\nOPTION (LOOP JOIN, MAXDOP 1);"
  },
  {
    id: 485,
    level: "Advanced",
    topic: "Query Tuning & DMVs",
    question: "Query sys.dm_exec_cached_plans joined via cross applies straight into the plan descriptors catalog sys.dm_exec_query_plan to extract xml text execution layout diagrams active inside infrastructure lookup pools.",
    hint: "Analyze internal transaction processing profiles checking storage access efficiencies via direct query diagnostic scripts parameters calculations validation commands metrics filters setups layouts.",
    concept: "Metadata engine diagnostic tuning models",
    answer: "SELECT cp.usecounts AS PlanExecutionVolume, cp.objtype AS CachedObjectType, query_plan AS XmlExecutionPlanBlueprint\nFROM sys.dm_exec_cached_plans cp\nCROSS APPLY sys.dm_exec_query_plan(cp.plan_handle)\nWHERE cp.cacheobjtype = 'Compiled Plan';"
  },
  {
    id: 486,
    level: "Advanced",
    topic: "Query Tuning & DMVs",
    question: "Identify active query memory grants and resource wait bottlenecks utilizing the system dynamic management view sys.dm_exec_query_memory_grants to troubleshoot execution limits.",
    hint: "Select key properties like requested_memory_kb and granted_memory_kb tracking engine workspace saturation points.",
    concept: "Metadata engine diagnostic tuning models",
    answer: "SELECT session_id, requested_memory_kb, granted_memory_kb, ideal_memory_kb, timeout_sec, wait_time_ms\nFROM sys.dm_exec_query_memory_grants;"
  },
  {
    id: 487,
    level: "Advanced",
    topic: "Query Tuning & DMVs",
    question: "Write an index maintenance script using DDL commands that rebuilds all non-clustered indexes on FactInternetSales if their fragmentation exceeds 30 percent, or reorganizes them otherwise, using an analytical loop model.",
    hint: "Incorporate ALTER INDEX REBUILD or REORGANIZE statements targeted at matching storage boundaries.",
    concept: "Physical schema tuning index architectures",
    answer: "-- Administrative tuning blueprint for database maintainers\nALTER INDEX IX_FactInternetSales_CoveringDates ON FactInternetSales REBUILD;\nALTER INDEX ALL ON FactInternetSales REORGANIZE;"
  },
  {
    id: 488,
    level: "Advanced",
    topic: "Query Tuning & DMVs",
    question: "Apply an explicit table hint inside an inner join configuration forcing the query compiler to implement a FORCE ORDER sequence restriction across analytical structures.",
    hint: "Append optimization directives straight to join expressions or query options endpoints to dictate parsing topologies manually.",
    concept: "Execution path hint injectors",
    answer: "SELECT f.SalesOrderNumber, c.LastName, g.City\nFROM FactInternetSales f\nINNER JOIN DimCustomer c ON f.CustomerKey = c.CustomerKey\nINNER JOIN DimGeography g ON c.GeographyKey = g.GeographyKey\nOPTION (FORCE ORDER);"
  },
  {
    id: 489,
    level: "Advanced",
    topic: "Query Tuning & DMVs",
    question: "Extract operational performance metrics from sys.dm_db_index_usage_stats to locate unused non-clustered indexes on FactResellerSales that consume disk overhead without providing search benefits.",
    hint: "Look for records with high user_updates but zero user_seeks, user_scans, and user_lookups parameters values.",
    concept: "Metadata engine diagnostic tuning models",
    answer: "SELECT OBJECT_NAME(object_id) AS TableName, index_id, user_seeks, user_scans, user_lookups, user_updates\nFROM sys.dm_db_index_usage_stats\nWHERE database_id = DB_ID() AND object_id = OBJECT_ID('FactResellerSales')\nORDER BY user_updates DESC;"
  },
  {
    id: 490,
    level: "Advanced",
    topic: "Query Tuning & DMVs",
    question: "Incorporate query execution hints to allocate specific memory grants tracking boundaries, using the OPTION (MIN_GRANT_PERCENT = 10) expression sequence definition.",
    hint: "Force resource governor parameters directly bypassing standard memory constraints profiling tools filters guidelines.",
    concept: "Execution path hint injectors",
    answer: "SELECT ProductKey, SUM(UnitsBalance) FROM FactProductInventory GROUP BY ProductKey\nOPTION (MIN_GRANT_PERCENT = 10);"
  }

];
