const classList = [
  "Administrative Law",
  "Advanced Antitrust Seminar",
  "Advanced Clinical Practice",
  "Advanced Corporate Transactions",
  "Advanced Environmental Law",
  "Advanced International Trade Law",
  "Advanced Legal Research",
  "Advanced Negotiation: Criminal Context",
  "Advanced Negotiation: Multiparty Negotiation, Group Decision Making, and Teams",
  "Advanced Skills Training for Human Rights Advocacy",
  "Advanced Topics in Anti-Discrimination Law",
  "Advanced Topics in Civil Procedure",
  "Advanced Topics in Evidence",
  "Advanced Topics in Jewish Law and Legal Theory",
  "Advertising Law",
  "Advocating for the Rule of Law: A Practical Approach",
  "American Conservative Political and Legal Thought",
  "American Democracy",
  "American Indian Law",
  "American Legal Education",
  "American Legal History",
  "American Legal History 1776-1865",
  "American Legal History: Law and Social Reform, 1929-1973",
  "An Introduction to American Law",
  "Analytical Methods for Lawyers",
  "Animal Law",
  "Antitrust Law & Economics - US",
  "Appellate Courts and Advocacy Workshop",
  "Art of Social Change",
  "Aspects of 'Sovereignty'",
  "Bankruptcy",
  "Bearing Witness: Documentary Film in the Struggle for Human Rights",
  "Becoming a Law Professor",
  "Behavioral Economics, Law and Public Policy",
  "Birthing a Constitution",
  "Black Lives Matter and the Law",
  "Business Law and Ethics: American and Jewish Legal Perspectives",
  "Business Strategy for Lawyers",
  "Business Valuation and Analysis",
  "Capital Markets Regulation",
  "Capital Punishment Clinic",
  "Capital Punishment in America",
  "Challenges in Public Leadership",
  "Challenges of a General Counsel",
  "Child Advocacy Clinic",
  "Child Advocacy Clinical Seminar",
  "Child, Family and State",
  "China and Hong Kong under the \"One Country, Two Systems\" Principle",
  "City Use of Technology",
  "Civil Liberties and the Second Reconstruction: Problems of suppression, violence, and covert disruption",
  "Civil Procedure Advanced: Topics in American Civil Justice",
  "Civil Rights Litigation",
  "Class Actions: Litigating Advanced Topics",
  "Climate Solutions Living Lab",
  "Commercial Law: Secured Transactions",
  "Communications and Internet Law and Policy",
  "Community Enterprise Project of the Transactional Law Clinics",
  "Comparative Constitutional Law",
  "Comparative Digital Privacy",
  "Comparative Online Privacy",
  "Complex Litigation: Legal Doctrines, Real World Practice",
  "Complex Mass Injury Litigation",
  "Compliance and Computation",
  "Conflict of Laws",
  "Congress and the Courts",
  "Constitutional History I: From the Founding to the Civil War",
  "Constitutional Law 3.0: The Trump Trajectory",
  "Constitutional Law: First Amendment",
  "Constitutional Law: Separation of Powers, Federalism, and Fourteenth Amendment",
  "Constitutional Theory: The Structure of Constitutional Rights",
  "Constitutional Transitions: Both Ways Now?",
  "Constitutions and Gender",
  "Consumer Bankruptcy",
  "Consumer Contracts",
  "Contemporary Critical Legal Thought: Perspectives From the Periphery",
  "Contemporary Issues in Constitutional Law",
  "Contemporary Issues in Intelligence Gathering",
  "Contemporary Issues in Oil and Gas Law: Fracking, Takings, Pipelines, and Regulation",
  "Contracts",
  "Copyright",
  "Copyright and Trademark Litigation",
  "Corporate Boards and Governance",
  "Corporate Finance",
  "Corporate Finance: Module I",
  "Corporate Finance: Module II",
  "Corporate Finance: Module III",
  "Corporate Finance: Module IV",
  "Corporate Governance: The Short-Termism Problem",
  "Corporate Reorganization",
  "Corporate Tax A: Formations, Operations and Liquidations",
  "Corporate Tax B: Mergers, Acquisitions and Divisions",
  "Corporate and Capital Markets Law and Policy",
  "Corporations",
  "Cost-Benefit Analysis",
  "Counseling and Legal Strategy in the Digital Age",
  "Criminal Justice Institute: Criminal Defense Clinic",
  "Criminal Justice Institute: Defense Theory and Practice",
  "Criminal Justice Policy Program",
  "Criminal Justice Workshop",
  "Criminal Law",
  "Criminal Procedure: Adjudication",
  "Criminal Procedure: Investigations",
  "Crimmigration Clinic",
  "Crimmigration: The Intersection of Criminal Law and Immigration Law",
  "Critical Race Theory",
  "Current Issues in Corporate Governance",
  "Current Issues in Securities Regulation",
  "Current Issues in Tax Law, Policy and Practice",
  "Cyber Criminal Law and Procedure",
  "Cyberlaw Clinic",
  "Cyberlaw Clinic Seminar",
  "Delivery of Legal Services Clinic",
  "Democracy and the Rule of Law Clinic",
  "Democracy, the Incomplete Experiment",
  "Designing Administration: Law, Politics, Governance",
  "Digital Copyright: A Comparative Perspective",
  "Digital Islamic Law Lab: Online Analysis of Islamic Legislation and Interpretation",
  "Digital Privacy",
  "Disability Rights Law",
  "Disability, Human Rights, and Development",
  "Dispute Systems Design",
  "Diversity and Dispute Resolution",
  "Diversity and Social Justice in First Year Classes",
  "Drafting and Negotiating Cross-Border Merger & Acquisition Transactions",
  "Drug Product Liability Litigation",
  "Economic Analysis of Law",
  "Education Advocacy and Systemic Change",
  "Education Law",
  "Education Law Clinic",
  "Education Law Clinic: Externships",
  "Education Law Clinic: Individual Representation",
  "Education Law Clinic: Legislative and Administrative Lawyering",
  "Education Law and Policy",
  "Education Reform and School Culture",
  "Election Law",
  "Emerging Issues in Mass Torts",
  "Emerging Issues in Refugee Protection: The Representation of Child Asylum Seekers",
  "Empirical Approaches to International Law",
  "Empirical Criminal Law",
  "Empirical Law and Economics",
  "Employment Discrimination",
  "Employment Law",
  "Employment Law Clinic",
  "Employment Law Workshop: Advocacy Skills",
  "Employment Law Workshop: Strategies for Social Change",
  "Employment Law and Employment Arbitration",
  "Energy and Climate Law and Policy",
  "Engaging China",
  "English Legal History",
  "Entertainment and Media Law",
  "Entrepreneurial Agreements and Startup Decisions",
  "Entrepreneurship and Venture Capital",
  "Entrepreneurship, Venture Capital and Law in China",
  "Environmental Law",
  "Environmental Law and Policy Clinic",
  "Environmental Law and Policy Clinical Course",
  "Estate Planning",
  "European Legal World",
  "Evidence",
  "Executive and Board Turnover in the S&P 500: Research Seminar",
  "Expertise and Rulership in Law and Science",
  "Fair Trial 2017",
  "Fair Trial 2018",
  "Family Law",
  "Farmed Animal Law and Policy",
  "Federal Budget Policy",
  "Federal Courts and the Federal System",
  "Federal Litigation Civil",
  "Federal Litigation-Civil",
  "Federal Tax Clinic",
  "Federal Tax Clinical Seminar",
  "Feminism and Crime Control",
  "Feminisms and Pornography, c. 1975-1995",
  "Feminist Legal Theory",
  "Financial and Legal Needs of Low and Moderate Income Households",
  "Food Law Lab",
  "Food Law and Policy",
  "Food Law and Policy Clinic of the Center for Health Law and Policy Innovation",
  "Food and Drug Law",
  "Fraud",
  "From Protest to Law: Triumphs and Defeats of the Civil Rights Revolution, 1950-1970",
  "Future of the Family",
  "Gender Violence Legal Policy Workshop",
  "Gender Violence, Law and Social Justice",
  "Gender and Political Economy",
  "Gender, Race, Context and Judging",
  "Global Anticorruption Lab",
  "Global Law and Governance",
  "Global Political Economy",
  "Globalization, Development and the Law",
  "Globalization: Business, Legal and Public Policy Issues",
  "Governing Cities in a (De)Globalizing World",
  "Government Lawyer",
  "Government Lawyer: Attorney General Clinic",
  "Government Lawyer: Semester in Washington Clinic",
  "Government Lawyer: Semester in Washington Clinical Seminar",
  "Government Lawyer: United States Attorney Clinic",
  "Government Secrecy",
  "Harvard Immigration and Refugee Clinic",
  "Harvard Legal Aid Bureau 2L",
  "Harvard Legal Aid Bureau 3L",
  "Harvard Negotiation and Mediation Clinic",
  "Health Care Law and Policy",
  "Health Care Reform and the Constitution",
  "Health Care Rights in the Twenty-First Century",
  "Health Law",
  "Health Law and Policy Clinic of the Center for Health Law and Policy Innovation",
  "Health Law, Policy, Bioethics, and Biotechnology Workshop",
  "Hedge Fund Law and Policy",
  "Hedge and Private Equity Funds: Law & Policy",
  "Housing Law Clinic",
  "Housing Law Clinical Workshop",
  "Housing Law and Policy",
  "Human Rights Advocacy",
  "Human Rights Religious Freedom Research Seminar",
  "Human Rights and International Law",
  "Human Rights in the UN Treaty Bodies",
  "Human and Community Rights: Pursuing Justice for Indigenous People",
  "ITA Prosecution Perspectives Clinic",
  "ITA: Prosecution Perspectives",
  "Immigration Law: Policy and Social Change",
  "Immigration and Refugee Advocacy",
  "Innovation in Legal Education and Practice",
  "Inside Government: Making Public Policy",
  "Institutional Investors and Alternative Investment Forms: Private Equity, Venture Capital, and Hedge Funds",
  "Insurance Law",
  "Intellectual Property Law: Advanced",
  "Intellectual Property Theory",
  "International Commercial Arbitration",
  "International Counter-Terrorism Law",
  "International Criminal Law",
  "International Environmental Law",
  "International Finance",
  "International Human Rights Clinic",
  "International Human Rights Clinic - Advanced",
  "International Humanitarian Law",
  "International Law in the US Legal System",
  "International Law, Policy and Decision-Making in War: Advanced Seminar",
  "International Trade Law",
  "Introduction to Accounting",
  "Introduction to Advocacy: Skills and Ethics in Clinical Practice",
  "Introduction to Empirical Methods",
  "Introduction to Finance Concepts 3-Day Section",
  "Introduction to Finance Concepts 3-Week Section",
  "Introduction to Islamic Law",
  "Introduction to Japanese Law",
  "Introduction to Social Entrepreneurship",
  "Investment Management Law: Private Funds, Money Market Funds and Other Issues",
  "Investments Workshop: Public and Private Equity",
  "Islamic Law: Human Rights Advocacy in the Muslim World",
  "Jewish Identity in Contemporary America",
  "Jewish Law: The Rabbinic Idea of Law",
  "Judgment and Decision-Making",
  "Judicial Process in Trial Courts Clinic",
  "Judicial Process in the Trial Courts Clinical Seminar",
  "Jurisprudence: Legal Ideals",
  "Jurisprudence: Natural Law and Positivism",
  "JuryX Workshop",
  "LGBT Flashpoints - Litigation, Policy and Persuasion",
  "Labor & Employment Lab",
  "Labor Law",
  "Latino Civil Rights Advocacy",
  "Law 2.0: Technology's Impact on the Practice of Law",
  "Law and Business",
  "Law and Catholic Social Thought",
  "Law and Cognition",
  "Law and Economics",
  "Law and Economics Seminar",
  "Law and Film: Kieslowski and Tykwer",
  "Law and Finance of Start-Up Companies",
  "Law and Neuroscience",
  "Law and Performing Arts",
  "Law and Philosophy Colloquium",
  "Law and Psychology: The Emotions",
  "Law and Sexuality",
  "Law and the International Economy",
  "Law, Economics and Psychology",
  "Law, Inequality, and Power: The Legal Construction of 21st Century Capitalism",
  "Law, Psychology, and Morality: An Exploration through Film",
  "Laws, Markets, and Religions",
  "Legal Education and the Legal Profession",
  "Legal History Seminar: Continental Legal History",
  "Legal History Workshop",
  "Legal History: American Legal Education",
  "Legal History: Continental Legal History",
  "Legal History: English Legal History",
  "Legal History: Workshop on the Political Economy of Modern Capitalism",
  "Legal Profession",
  "Legal Profession - The New Market for Personal Legal Services: Ethical and Professional Challenges",
  "Legal Profession Seminar",
  "Legal Profession: Collaborative Law",
  "Legal Profession: Government Ethics - Scandal and Reform",
  "Legal Realism",
  "Legal Research and Writing",
  "Legal Research, Writing and Analysis I",
  "Legal Research, Writing and Analysis II",
  "Legal Tools for Protecting Democracy and the Rule of Law in America",
  "Legal Writing: Advanced",
  "Legislation and Regulation",
  "Legislative Lawyering in Education",
  "Litigating in the Family Courts: Domestic Violence and Family Law Clinic",
  "Litigating in the Family Courts: Domestic Violence and Family Law Clinical Seminar",
  "Litigation and Law Firm Finance and the Future of the Legal Profession",
  "Local Government Law",
  "Making Legal History",
  "Making Rights Real: The Ghana Project",
  "Making Rights Real: The Ghana Project Clinic",
  "Management and Leadership Skills for Lawyers",
  "Mass Incarceration: Its Causes, its Impact, Its Elimination and Prevention",
  "Mass Media Law",
  "Mediation",
  "Mediation Clinic",
  "Medical Malpractice",
  "Mergers and Acquisitions",
  "Mergers and Acquisitions Processes and Structures",
  "Mergers and Acquisitions Workshop: Boardroom Strategies and Deal Tactics",
  "Migration and Human Rights",
  "Mind and Criminal Responsibility in the Anglo-American Tradition",
  "Modernization, Development and Revolution in Latin America: Legal Experiments",
  "Monetary Reform: A Seminar in Just Design",
  "Music and Digital Media",
  "Narrative Mediation",
  "National Security Law",
  "National Security Law and Practice",
  "National Security Law: Legal Frameworks and National Security Decision-making",
  "Natural Law and Positive Law",
  "Natural Resources Law",
  "Negotiating and Drafting International Business Transactions",
  "Negotiation Workshop",
  "Negotiation and Diplomacy",
  "Negotiation and Mediation Clinical Seminar",
  "Nietzsche For Lawyers",
  "Overcriminalization and the Limits of Criminal Law",
  "Partnership Tax",
  "Patent Law",
  "Patent Litigation Workshop",
  "Patent Trial Advocacy",
  "Patents",
  "Perspectives on the U.S. Presidency",
  "Policing in America",
  "Policing the Police",
  "Political Economy After the Crisis",
  "Poverty Law",
  "Poverty, Human Rights, and Development",
  "Powering the U.S. Electric Grid",
  "Predatory Lending and Consumer Protection Clinic",
  "Predatory Lending and Consumer Protection Clinical Seminar",
  "Presidential Power in an Era of Conflict",
  "Private Law Workshop",
  "Professional Responsibility in Family Practice",
  "Programming for Lawyers",
  "Progressive Alternatives: Institutional Reconstruction Today",
  "Property",
  "Property and Democracy",
  "Public Education Policy and Consulting Clinic",
  "Public Health Law and Policy",
  "Public International Law",
  "Public Law Workshop",
  "Public Problems: Advice, Strategy and Analysis",
  "Race & Politics: Post Racial? A 21st Century Query",
  "Race, Gender, and Criminal Law",
  "Racial Justice Reading Group",
  "Reading the Federalist in the 21st Century: Does Publius Have Anything to Teach us in 2017?",
  "Real Estate Law",
  "Redesigning Humans: What Limits?",
  "Regulation of Financial Institutions",
  "Reinventing Criminal Law",
  "Religious Freedom Research",
  "Reproductive Justice",
  "Reproductive Technology and Genetics: Legal and Ethical Issues",
  "Research Seminar in Administrative Law and Theory",
  "Research Seminar in Law, Economics, and Organizations",
  "Responsibility",
  "Responsive Communities Lab",
  "Restitution",
  "Roman Law",
  "Rule of Law",
  "Securities Litigation",
  "Securities Regulation",
  "Seeing Criminal Justice: Examining the Interplay of Visual Media and the Law",
  "Semester in Human Rights",
  "Special Education Advocacy for Students Impacted by Trauma",
  "Sports Law Clinic",
  "Sports Law: Advanced Contract Drafting",
  "Sports and the Law: Examining the Legal History and Evolution of America's Three \"Major League\" Sports: MLB, NFL and NBA",
  "Sports and the Law: Representing the Professional Athlete",
  "State Constitutional Law",
  "State Energy Law",
  "Structuring Venture Capital, Private Equity, and Entrepreneurial Transactions",
  "Supreme Court Litigation",
  "Supreme Court Litigation Clinic",
  "Systemic Advocacy for Safe and Supportive Schools",
  "Systemic Justice",
  "Tax Law, Finance, and Strategic Planning",
  "Taxation",
  "Taxation of Businesses",
  "Teaching Copyright",
  "Technology and Inequality",
  "The Architecture of International Income Taxation",
  "The Art and Science of Financial Regulation",
  "The Comparative and International Law Workshop",
  "The Conduct of Life in Western and Eastern Philosophy",
  "The Constitutional Law of Money",
  "The Cult of ADR and Other Critiques of Alternative Practice",
  "The Early American Republic: The United States from 1783-1873",
  "The Effects of Mass Incarceration: Experiences of Prison and Parole",
  "The Equal Protection Clause: Underexplored Possibilities",
  "The Future of Europe: Key Challenges and the Restructuring of the European Project",
  "The Future of Latinos in the United States: Law, Opportunity, and Mobility",
  "The History of Evidence",
  "The International Law of the Sea",
  "The Justice Lab",
  "The Law of Nonprofit Organizations",
  "The Legal Architecture of Globalization: Money, Debt, and Development",
  "The Making of the U.S. Constitution",
  "The Operations and Ethics of the State Attorney General",
  "The President and Immigration Law",
  "The Promises and Challenges of Disarmament",
  "The Reasonableness Standard: Practice v. Theory",
  "The Role of the Article III Judge",
  "The Role of the State Attorney General",
  "The Short Stories of Alice Munro: A Woman's Voice in a Changing World",
  "The Supreme Court 2005-2016",
  "The Supreme Court Since 2005",
  "The Supreme Court's 2016 Term",
  "The Two-Way Mirror: Media Imaging in the 21st Century",
  "The U.S. Congress and Law Making",
  "Theories About Law",
  "Title IX: Sports, Sex and Equality on Campus",
  "Topics in Education Law and Policy",
  "Topics in Mergers and Acquisitions",
  "Tort Theory",
  "Torts",
  "Torts in the Supreme Court",
  "Trade, Development, and Entrepreneurship",
  "Trademark and Unfair Competition",
  "Transactional Law Clinical Workshop",
  "Transactional Law Clinics",
  "Transnational Corruption",
  "Trauma, Refugees and Asylum Law",
  "Trial Advocacy Workshop",
  "Trusts and Estates",
  "U.S. Aspects of International Income Taxation",
  "Understanding Law Firms as Businesses",
  "Unintended Consequences in Law and Politics",
  "Valuing and Modeling M&A and LBOs",
  "Venture Law and Finance",
  "Veterans Law and Disability Benefits Clinic",
  "Veterans Law and Disability Benefits Clinical Seminar",
  "Visual Justice: Documentary Film and Human Rights",
  "War and Crime",
  "What's Next for the Supreme Court: Cases on the Docket, October Term 2017",
  "White Collar Criminal Law and Procedure: High Profile Trials and Corporate Resolutions",
  "Women and Leadership",
  "Working in the Law Firm of Today and Tomorrow: Shifts, Strategies and Success",
  "Writing in Conjunction with Summer Work Experience"
];
const professorList = [
  "Abrams",
  "Alford",
  "Alviar",
  "Anderson",
  "Anker",
  "Apps",
  "Ardalan",
  "Baker",
  "Bar-Gill",
  "Barron",
  "Bartholet",
  "Basin",
  "Bavitz",
  "Bebchuk",
  "Beckert",
  "Beckett",
  "Bell",
  "Beneyto",
  "Benkler",
  "Berman",
  "Bertling",
  "Berwick",
  "Bienenstock",
  "Bjorklund",
  "Blank",
  "Bloostein",
  "Blum",
  "Bonauto",
  "Borden",
  "Bordone",
  "Bosiljevac",
  "Brann",
  "Brennan",
  "Brewer",
  "Bridges",
  "Brotman",
  "Brown-Nagin",
  "Bruno",
  "Burch",
  "Burling",
  "Burns",
  "Butler",
  "Butuyan",
  "Caramello",
  "Carfagna",
  "Cendali",
  "Champ",
  "Charles",
  "Charn",
  "Chew",
  "Churchill",
  "Claeys",
  "Clark",
  "Clary",
  "Coates",
       "Cohen, Alma",
       "Cohen, Amy",
       "Cohen, I.G.",
       "Cohen, R.R.",
  "Cole",
  "Connor",
  "Cope",
  "Coquillette",
  "Corrigan",
  "Costello",
  "Cox",
  "Cratsley",
  "Crawford",
  "Crespo",
  "Crowe",
  "Cushman",
  "Dacey",
  "Davis",
  "DeLong",
  "Deeks",
  "Desai",
  "Desan",
  "Dharan",
  "Dixon",
  "Docherty",
  "Dolin",
  "Donahue",
  "Eggleston",
  "Elhauge",
  "Elkin-Koren",
  "Emery",
  "Encarnacion",
  "Fallon",
  "Farbman",
  "Farbstein",
  "Feldman",
  "Ferrell",
  "Fertik",
  "Field",
  "Fisher",
  "Florence",
  "Fogg",
  "Fong",
  "Forrest",
  "Frakes",
  "Freeman",
       "Fried",
       "Fried, C.",
       "Fried, J.",
  "Friedman",
  "Frug",
  "Fung",
  "Gardner",
  "Gasser",
  "George",
       "Gersen, J.E.",
       "Gersen, J.S.",
  "Gertner",
  "Giannini",
  "Glauber",
  "Glendon",
  "Goldberg",
  "Goldsmith",
  "Goldstein",
  "Goold",
  "Gordon",
  "Gordon-Reed",
  "Green",
  "Greenwald",
  "Gregory",
  "Griffith",
  "Grossi",
  "Grove",
  "Gruber",
  "Halley",
  "Hanson",
  "Hay",
  "Hazen",
  "Heineman",
  "Hirst",
  "Hoffman",
  "Hopkins",
  "Hornik",
  "Hornstine",
  "Hutt",
       "Jackson, H.E.",
       "Jackson, V.C.",
  "Jacobs",
  "Jasanoff",
  "Joroff",
  "Kaden",
  "Kagan",
  "Kahan",
  "Kamali",
  "Kaplow",
  "Kaufman",
  "Kavanaugh",
  "Kelly",
       "Kennedy, David",
       "Kennedy, Duncan",
       "Kennedy, J.",
       "Kennedy, R.L.",
  "King",
  "Klahr",
  "Klarman",
  "Konschnik",
  "Kool",
  "Kraakman",
  "Kraska",
  "Krishnamurthy",
  "Krol",
  "Kuhlmann",
  "Lanni",
  "Lau",
  "Lawrence",
  "Lazarus",
  "Leib",
  "Lepore",
  "Lessig",
  "Leung",
  "Levin",
  "Levinson",
  "Liebman",
       "Lin, D.",
       "Lin, J.",
  "Liu",
  "Lovvorn",
  "Mabus",
  "MacCourt",
  "Mack",
  "Maclin",
  "Mann",
  "Manning",
  "Massey",
  "McCraw",
  "McDonagh",
  "McKinley",
  "McManus",
  "Mechanic",
  "Mergen",
  "Merrill",
  "Metzger",
  "Meurer",
  "Michelman",
  "Minow",
  "Mital",
  "Mnookin",
  "Modirzadeh",
  "Moncrieff",
  "Moran",
  "Murray",
  "Nagin",
  "NeJaime",
  "Nesson",
  "Neuman",
  "Nitze",
  "Odim",
  "Ogletree",
  "Olsen",
  "Paredes",
  "Parker",
  "Peskoe",
  "Porcelli",
  "Presser",
  "Price",
  "Puett",
  "Rabb",
  "Rahman",
  "Rakoff",
  "Ramirez",
  "Ramseyer",
  "Renan",
  "Reynolds",
  "Rienzi",
  "Ristroph",
  "Rizzi",
  "Robinson",
  "Rodrik",
  "Roe",
  "Rosenberg",
  "Rosenfeld",
  "Rosenthal",
  "Rubin",
  "Sachs",
  "Saiman",
  "Sale",
  "Salzman",
  "Samuel",
  "Sargentich",
  "Saul",
  "Scheppele",
  "Schulman",
  "Schwartz",
  "Schwartztol",
  "Scott",
  "Sebenius",
  "Seligman",
  "Shachar",
  "Shavell",
  "Shay",
  "Singer",
  "Singh",
  "Sitkoff",
  "Smith",
  "Sonenshine",
  "Spamann",
  "Spier",
  "Steiker", // TODO split into steikerJ and steikerC
  "Stein",
  "Steinitz",
  "Stephenson",
  "Stilt",
  "Stone",
  "Strauss",
  "Strine",
  "Subramanian",
  "Sullivan",
  "Sunstein",
  "Sutton",
  "Tan",
  "Tierney",
  "Tobin",
  "Tompros",
  "Torrey",
  "Tribe",
  "Tung",
       "Tushnet, M.",
       "Tushnet, R.",
  "Umunna",
  "Unger",
  "Verdier",
  "Vermeule",
  "Viscomi",
  "Wacks",
  "Walczewski",
  "Warner",
  "Warren",
  "West",
  "Westaway",
  "Westfahl",
  "White",
       "Whiting, A.",
       "Whiting, P.",
  "Wilkins",
  "Willshire-Carrera",
  "Woetzel",
  "Wolfman",
  "Wroblewski",
  "Wu",
  "Yang",
  "Zarate",
  "Zittrain"
]
