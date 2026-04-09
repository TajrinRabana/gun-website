export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Overview', href: '#overview' },
  { label: 'Key Findings', href: '#findings' },
  { label: 'National Trends', href: '#national-trends' },
  { label: 'State Comparison', href: '#state-comparison' },
  { label: 'Changes Over Time', href: '#changes-over-time' },
  { label: 'Maps & Heatmaps', href: '#maps-heatmaps' },
  { label: 'Regional Analysis', href: '#regional-analysis' },
  { label: 'Policy Interpretation', href: '#policy-interpretation' },
  { label: 'Digital Manifest', href: '#digital-manifest' },
]

export const overviewCards = [
  { label: 'Study period', value: '2000–2019' },
  { label: 'Unit of analysis', value: 'State-year' },
  { label: 'Main outcome', value: 'Gun-related deaths and crude death rates' },
  { label: 'Scope', value: 'Descriptive state-level analysis' },
  { label: 'Focus', value: 'Trends, comparisons, maps, heatmaps, and regional variation' },
]

export const objectives = [
  'Examine national trends in gun-related deaths.',
  'Compare states by death rates and total deaths.',
  'Identify states with the largest increases and decreases.',
  'Present regional and geographic variation.',
  'Discuss how firearm policy environments may align with observed differences.',
]

export const findings = [
  'Gun-related deaths increased nationally from 2000 to 2019.',
  'Louisiana, Wyoming, Mississippi, Alabama, and Alaska had the highest long-term crude death rates.',
  'Hawaii, Massachusetts, Rhode Island, New York, and New Jersey had the lowest long-term crude death rates.',
  'California, Texas, and Florida had the highest total deaths.',
  'Wyoming showed one of the sharpest increases.',
  'New York showed one of the clearest decreases.',
  'The South had the highest regional mortality pattern.',
  'The Northeast had the lowest regional mortality pattern.',
]

export const nationalTrendsFigures = [
  {
    id: 1,
    title: 'Figure 1. U.S. Total Gun-Related Deaths by Year (2000–2019)',
    path: '/images/figure_1_us_total_firearm_deaths_by_year.png',
    caption: 'National totals show a substantial upward pattern across the study period.'
  },
  {
    id: 2,
    title: 'Figure 2. U.S. Crude Gun-Related Death Rate by Year (2000–2019)',
    path: '/images/figure_2_us_crude_firearm_death_rate_by_year.png',
    caption: 'Crude death rates also rose over time, indicating that the increase was not only driven by population size.'
  },
]

export const stateComparisonFigures = [
  {
    id: 3,
    title: 'Figure 3. Top 10 States by Average Crude Death Rate',
    path: '/images/figure_3_top10_states_avg_crude_rate.png',
    caption: 'This comparison highlights the states with the highest long-run average gun-related death rates.'
  },
  {
    id: 4,
    title: 'Figure 4. Lowest 10 States by Average Crude Death Rate',
    path: '/images/figure_4_least10_states_avg_crude_rate.png',
    caption: 'This figure highlights the states with the lowest long-run average gun-related death rates.'
  },
]

export const changeGroups = [
  {
    label: 'Largest increases',
    figures: [
      {
        id: 5,
        title: 'Figure 5. Top 10 Increase in Crude Death Rate',
        path: '/images/figure_5_top10_increase_crude_rate.png',
        caption: 'States in this group showed the largest upward shifts in crude gun-related death rates.'
      },
      {
        id: 7,
        title: 'Figure 7. Top 10 Increase in Total Deaths',
        path: '/images/figure_7_top10_increase_deaths.png',
        caption: 'This figure compares states with the largest increases in total gun-related deaths.'
      },
      {
        id: 11,
        title: 'Figure 11. Top 10 Absolute Change Slope (2000–2019)',
        path: '/images/figure_11_top10_absolute_change_slope_2000_2019.png',
        caption: 'Long-run slope differences show where the change trajectory was steepest.'
      },
    ],
  },
  {
    label: 'Largest decreases',
    figures: [
      {
        id: 6,
        title: 'Figure 6. Top 10 Decrease in Crude Death Rate',
        path: '/images/figure_6_top10_decrease_crude_rate.png',
        caption: 'These states showed the clearest reductions in crude gun-related death rates.'
      },
      {
        id: 8,
        title: 'Figure 8. Top 10 Decrease in Total Deaths',
        path: '/images/figure_8_top10_decrease_deaths.png',
        caption: 'This comparison shows where total gun-related deaths decreased most clearly.'
      },
    ],
  },
  {
    label: 'Start vs end year comparison',
    figures: [
      {
        id: 9,
        title: 'Figure 9. Top 10 States: 2019 vs 2000 Crude Rate',
        path: '/images/figure_9_top10_states_2019_vs_2000_crude_rate.png',
        caption: 'This figure compares beginning and end-year crude death rates in selected high-change states.'
      },
      {
        id: 10,
        title: 'Figure 10. Lowest 10 States: 2019 vs 2000 Crude Rate',
        path: '/images/figure_10_least10_states_2019_vs_2000_crude_rate.png',
        caption: 'This comparison highlights how lower-rate states changed between the first and final year.'
      },
      {
        id: 12,
        title: 'Figure 12. Top 10 States: 2019 vs 2000 Total Deaths',
        path: '/images/figure_12_top10_states_2019_vs_2000_deaths.png',
        caption: 'This figure contrasts total deaths in the first and final year for selected states.'
      },
    ],
  },
]

export const heatmapMapFigures = [
  {
    id: 13,
    title: 'Figure 13. Full State-Year Heatmap of Crude Death Rate',
    path: '/images/figure_13_full_state_year_heatmap_crude_rate.png',
    caption: 'The full heatmap shows persistent variation across states and across years.'
  },
  {
    id: 14,
    title: 'Figure 14. Top 20 States Heatmap of Crude Death Rate',
    path: '/images/figure_14_top20_states_heatmap_crude_rate.png',
    caption: 'This heatmap focuses on higher-rate states to make longer-run concentration patterns easier to compare.'
  },
  {
    id: 15,
    title: 'Figure 15. Lowest 20 States Heatmap of Crude Death Rate',
    path: '/images/figure_15_least20_states_heatmap_crude_rate.png',
    caption: 'This heatmap focuses on lower-rate states to show persistent contrasts over time.'
  },
  {
    id: 16,
    title: 'Figure 16. U.S. Map of Average Crude Death Rate',
    path: '/images/figure_16_us_map_average_crude_rate.png',
    caption: 'The geographic pattern shows strong state-level differences in long-term average crude death rates.'
  },
  {
    id: 17,
    title: 'Figure 17. U.S. Map of Total Deaths',
    path: '/images/figure_17_us_map_total_deaths.png',
    caption: 'Large-population states account for the highest total counts of gun-related deaths.'
  },
  {
    id: 18,
    title: 'Figure 18. U.S. Map of Crude Death Rate Change (2000–2019)',
    path: '/images/figure_18_us_map_crude_rate_change_2000_2019.png',
    caption: 'The change map highlights where death rates rose or fell most clearly over the study period.'
  },
]

export const regionalFigures = [
  {
    id: 19,
    title: 'Figure 19. Total Gun-Related Deaths by Region',
    path: '/images/figure_19_total_firearm_deaths_by_region.png',
    caption: 'Regional totals help compare overall burden across major U.S. regions.'
  },
  {
    id: 20,
    title: 'Figure 20. Average Crude Death Rate by Region',
    path: '/images/figure_20_average_crude_rate_by_region.png',
    caption: 'Average crude rates show sustained regional differences rather than one-year fluctuations.'
  },
  {
    id: 21,
    title: 'Figure 21. Median Crude Death Rate by Region',
    path: '/images/figure_21_median_crude_rate_by_region.png',
    caption: 'The median perspective helps limit the influence of outlier states within each region.'
  },
  {
    id: 22,
    title: 'Figure 22. Regional Crude Death Rate Trends',
    path: '/images/figure_22_regional_crude_rate_trends.png',
    caption: 'Regional rate trends show how divergence persisted across the study period.'
  },
  {
    id: 23,
    title: 'Figure 23. Regional Total Death Trends',
    path: '/images/figure_23_regional_total_deaths_trends.png',
    caption: 'Regional totals reveal how counts shifted over time across broad geographic areas.'
  },
  {
    id: 24,
    title: 'Figure 24. Regional Crude Death Rate: 2000 vs 2019',
    path: '/images/figure_24_regional_crude_rate_2000_vs_2019.png',
    caption: 'This comparison highlights the change between the first and final year by region.'
  },
  {
    id: 25,
    title: 'Figure 25. Regional Deaths: 2000 vs 2019',
    path: '/images/figure_25_regional_deaths_2000_vs_2019.png',
    caption: 'The first-year versus final-year comparison shows how regional totals evolved.'
  },
]

export const policyCards = [
  {
    title: 'Lower-rate states with stricter firearm policy profiles',
    states: ['Massachusetts', 'New Jersey', 'Hawaii', 'New York'],
    policyTypes: [
      'Purchaser licensing or permit-to-purchase',
      'Stronger background check frameworks',
      'Safe-storage requirements',
      'Child-access prevention laws',
      'Stricter regulation of public carry',
      'Broader sales regulation',
    ],
  },
  {
    title: 'Higher-rate states with more permissive firearm policy profiles',
    states: ['Wyoming', 'Mississippi', 'Alabama', 'Louisiana', 'Alaska'],
    policyTypes: [
      'Weaker purchaser screening systems',
      'Fewer waiting period requirements',
      'More permissive concealed carry environments',
      'Weaker safe-storage or child-access controls in some cases',
    ],
  },
]

export const manifestItems = [
  { label: 'Website type', value: 'Frontend-only academic visualization site' },
  { label: 'Built with', value: 'React, Vite, Tailwind CSS' },
  { label: 'Content type', value: 'Static figures and descriptive interpretation' },
  { label: 'Figures included', value: '25' },
  { label: 'Data handling', value: 'No backend or personal data used' },
  { label: 'Repository', value: 'Add GitHub repository URL' },
]
