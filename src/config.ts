export const siteConfig = {
  name: "Sierra Vo",
  title: "Data Scientist",
  description: "Portfolio website of Sierra Vo",
  accentColor: "#1d4ed8",
  social: {
    linkedin: "https://www.linkedin.com/in/sierra-vo",
    github: "https://github.com/sierravo",
    resume: ""
  },
  aboutMe:
  "I am a data scientist and analytics professional with a background in statistics, finance, and applied machine learning. I use SQL, Python, and statistical modeling to turn messy data into forecasts, metrics, and business decisions. My work focuses on fintech analytics, product analytics, forecasting, experimentation, and decision support.",
  skills: ["Python", "SQL", "pandas", "NumPy", "scikit-learn", "XGBoost", "PyTorch", "TensorFlow", "Forecasting", "A/B Testing", "Experiment Design", "Product Analytics", "Funnel Analysis", "Cohort Analysis", "Risk Analytics", "Fraud Detection", "Customer Segmentation", "Model Evaluation", "Tableau", "Power BI"],
  projects: [
    {
      name: "Multimodal Emotion Recognition for Media Analytics",
      description:
        "Built a media analytics pipeline combining facial landmark features, pixel-based image modeling, text-emotion scoring, and prediction aggregation to analyze observable emotional signals in article text and images. Business Impact: Demonstrated how combining text and visual signals can improve audience sentiment analysis, with potential applications in media analytics, content evaluation, and customer feedback analysis.",
      link: "https://github.com/sierravo/Multimodal-Emotion-Recognition-for-Media-Analytics",
      skills: ["Python", "pandas", "scikit-learn", "XGBoost", "TensorFlow", "PyTorch", "BeautifulSoup", "pytest"],
    },
    {
      name: "Crypto Forecasting with Time-Series Machine Learning",
      description:
        "Compared LSTM, graph-based models, and simple forecasting baselines for multi-asset crypto return prediction, with emphasis on leakage control, time-series validation, baseline comparison, and model evaluation. Business Impact: Demonstrated that increased model complexity did not improve forecast accuracy, helping guide model selection toward simpler and more interpretable approaches for financial forecasting and risk monitoring.",
      link: "https://github.com/sierravo/Crypto-Forecasting-Hybrid-Models",
      skills: ["Python", "pandas", "NumPy", "scikit-learn", "PyTorch", "Time-Series Forecasting", "Model Evaluation"],
    },
    {
      name: "Music Revenue Forecasting & Marketing Allocation",
      description:
        "Built a forecasting and decision-support workflow to predict next-month artist revenue, compare models against simple baselines, and translate predictions into a marketing budget allocation framework. Business Impact: Translated revenue forecasts into marketing budget recommendations by identifying artists with the highest expected growth, improving potential allocation efficiency and prioritization decisions.",
      link: "https://github.com/sierravo/Music-Revenue-Forecasting",
      skills: ["Python", "pandas", "scikit-learn", "LightGBM", "Forecasting", "Model Evaluation", "Marketing Analytics"],
    },
  ],
  experience: [
    {
      company: "Babywearco LLC",
      title: "Co-Founder",
      date: "Jul 2024 – Present",
      location: "New York, NY",
      bullets: [
        "Operated an e-commerce business across product selection, pricing, inventory, marketing, and customer acquisition.",
        "Analyzed conversion metrics, customer behavior, and advertising performance to evaluate growth and marketing efficiency.",
        "Built reporting processes to track sales performance, inventory turnover, and key business metrics.",
      ],
    },
    {
      company: "By Design LLC",
      title: "Senior Financial Data Analyst / Accounts Receivable Team Lead",
      date: "Jul 2022 – Dec 2024",
      location: "New York, NY",
      bullets: [
        "Automated invoice and reporting workflows, helping reduce aged accounts receivable by 12% and double collection rates.",
        "Used regression analysis to identify unprofitable customer patterns and support profitability decisions.",
        "Built Python reporting and forecasting workflows that reduced recurring administrative work by 50%.",
      ],
    },
    {
      company: "UBS Group AG – Quantitative Analysis and Data Science Team",
      title: "Quantitative Analyst",
      date: "Mar 2022 – Jul 2022",
      location: "New York, NY",
      bullets: [
        "Queried and joined SQL data to automate Python-based revenue forecasting workflows, reducing quarterly work by about one week.",
        "Built a Python pipeline combining structured SQL data and scraped text to generate dynamic wealth manager profiles.",
        "Developed regression and tree-based decision metrics to support analysis of wealth-manager bring-over potential.",
        "Delivered business-facing insights through Tableau and Power BI dashboards for management.",
      ],
    },
    {
      company: "Columbia University – Graduate School of Arts and Sciences",
      title: "Machine Learning Researcher",
      date: "Nov 2020 – Jul 2021",
      location: "New York, NY",
      bullets: [
        "Reimplemented a multimodal emotion-recognition workflow combining article text, engineered facial-landmark features, and pixel-based CNN predictions for media analytics.",
        "Built article/image scraping and model-aggregation pipelines; accompanying research showed that combining landmark and pixel-model outputs improved 8-class classification accuracy from about 58% to 76.7%.",
      ],
    },
    {
      company: "Case Western Reserve University – School of Medicine",
      title: "Data Science Researcher",
      date: "Jun 2019 – Dec 2019",
      location: "Cleveland, OH",
      bullets: [
        "Analyzed structured and unstructured medical data for 10,000 patients over 16 years using R.",
        "Identified brain-tumor risk factors and treatment outcomes using logistic regression and survival analysis.",
        "Presented findings in weekly research reports and contributed to a peer-reviewed manuscript.",
      ],
    },
  ],
  education: [
    {
      school: "Columbia University",
      degree: "M.A. in Statistics",
      dateRange: "2020 – 2021",
      achievements: [
        "Concentration in Machine Learning",
        "Class Representative",
      ],
    },
    {
      school: "Case Western Reserve University",
      degree: "M.S. in Finance",
      dateRange: "2019 – 2020",
      achievements: [
        "Concentration in Big Data Analytics",
      ],
    },
    {
      school: "Case Western Reserve University",
      degree: "B.S. in Finance and Statistics",
      dateRange: "2016 – 2020",
      achievements: [
        "Concentration in Actuarial Science",
        "Wolstein Honors Society",
      ],
    },
  ],
};
