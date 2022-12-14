const sectionScreening = [
  {
    type: "header",
    header: "Screening",
    explanation:
      "During the PAST 3 MONTHS, how often did the client do the following:",
    show: true,
  },
  {
    name: "Q1",
    question:
      "Q1. Drink more than a few sips of beer, wine, or any drink containing alcohol?",
    section: "Substance Use Screen",
    subsection: "",
    type: 1,
    show: true,
  },
  {
    name: "Q2",
    question:
      "Q2. Use any marijuana (weed, oil, wax, or hash by smoking, vaping, dabbing, or in food) or “synthetic marijuana” (like “K2,” “Spice”)?",
    section: "Substance Use Screen",
    subsection: "",
    type: 1,
    show: true,
  },
  {
    name: "Q3",
    question:
      "Q3. Use anything else to get high (like other illegal drugs, prescription or over-the-counter medications, and things that you sniff, huff, vape, or inject)?",
    section: "Substance UseScreen",
    subsection: "",
    type: 1,
    show: true,
  },
  {
    name: "Q4",
    question:
      "Q4. Use any tobacco or nicotine products (for example, cigarettes, e-cigarettes, hookahs or smokeless tobacco)?",
    section: "Substance UseScreen",
    subsection: "",
    type: 1,
    show: true,
  },
  {
    name: "Q5",
    question:
      "Q5. Have you ever ridden in a CAR driven by someone (including yourself) who was “high” or had been using alcohol or drugs?",
    section: "Substance Use Screen",
    subsection: "",
    type: 0,
    show: true,
  },
  {
    name: "Q6",
    question:
      "Q6. Do you ever use alcohol or drugs to RELAX, feel better about yourself, or fit in?",
    section: "Substance Use Screen",
    subsection: "Follow-Up Questions for Substance Use Screen",
    type: 0,
    show: false,
  },
  {
    name: "Q7",
    question:
      "Q7. Do you ever use alcohol or drugs while you are by yourself, or ALONE?",
    section: "Substance Use Screen",
    subsection: "Follow-Up Questions for Substance Use Screen",
    type: 0,
  },
  {
    name: "Q8",
    question:
      "Q8. Do you ever FORGET things you did while using alcohol or drugs?",
    section: "Substance Use Screen",
    subsection: "Follow-Up Questions for Substance Use Screen",
    type: 0,
  },
  {
    name: "Q9",
    question:
      "Q9. Do your FAMILY or FRIENDS ever tell you that you should cut down on your drinking or drug use?",
    section: "Substance Use Screen",
    subsection: "Follow-Up Questions for Substance Use Screen",
    type: 0,
  },
  {
    name: "Q10",
    question:
      "Q10. Have you ever got into TROUBLE while you were using alcohol or drugs?",
    section: "Substance Use Screen",
    subsection: "Follow-Up Questions for Substance Use Screen",
    type: 0,
  },
];

const sectionRisks = [
  {
    type: "header",
    header: "Risks",
  },
  {
    name: "Q11",
    question: "Q11. In the past few weeks, have you wished you were dead?",
    section: "Risk of Self Harm",
    subsection: "",
    type: 0,
  },
  {
    name: "Q12",
    question:
      "Q12. In the past few weeks, have you felt that you or your family would be better off if you were dead?",
    section: "Risk of Self Harm",
    subsection: "",
    type: 0,
  },
  {
    name: "Q13",
    question:
      "Q13. In the past week, have you been having thoughts about killing yourself?",
    section: "Risk of Self Harm",
    subsection: "",
    type: 0,
  },
  {
    name: "Q14",
    question:
      "Q14. In the past few weeks have you noticed a significant increase in your substance use?",
    section: "Risk of Self Harm",
    subsection: "",
    type: 0,
  },
  {
    name: "Q14a",
    question: "Q14a. Did you find yourself in potentially harmful situations?",
    section: "Risk of Self Harm",
    subsection: "If Yes:",
    type: 0,
  },
  {
    name: "Q14b",
    question:
      "Q14b. Did you find yourself engaging in potentially harmful behaviors?",
    section: "Risk of Self Harm",
    subsection: "If Yes:",
    type: 0,
  },
  {
    name: "Q15",
    question:
      "Q15. Have you ever tried to kill yourself? If yes: how, when and why?",
    section: "Risk of Self Harm",
    subsection: "",
    type: 0,
  },

  {
    name: "Q16",
    question: "Q16. Would you say that you able to take care of yourself?",
    section: "Risk of Self Harm",
    subsection: "",
    type: 0,
  },
];

const sectionTrauma = [
  {
    type: "header",
    header: "Trauma",
  },
  {
    name: "Q17",
    question:
      "Q17. Have you ever in your lifetime experienced anything that has been especially horrific, frightening or traumatic?",
    type: 6,
    nameA: "Q17a",
    questionA:
      "Q17a. In the past 30 days you had nightmares about it or thought about it when you did not want to.",
    nameB: "Q17b",
    questionB:
      "Q17b. In the past 30 days you tried not to think about it or went out of your way to avoid situations that remind you of your experience.",
    nameC: "Q17c",
    questionC:
      "Q17c. In the past 30 days you were constantly on guard, watchful or easily startled.",
    nameD: "Q17d",
    questionD:
      "Q17d. In the past 30 days you felt numb or detached from others, activities, or your surroundings related to your experience.",
    section: "Trauma",
  },
];

const sectionDepression = [
  {
    type: "header",
    header: "Depression and Anxiety",
  },

  {
    name: "Q18",
    question: "Q18. I am who I am.",
    section: "Depression and Anxiety",
    subsection: "",
    type: 2,
  },
  {
    name: "Q19",
    question: "Q19. I am not an easy person with which to get along.",
    section: "Depression and Anxiety",
    subsection: "",
    type: 2,
  },
  {
    name: "Q20",
    question: "Q20. I give up too easily.",
    section: "Depression and Anxiety",
    subsection: "",
    type: 2,
  },
  {
    name: "Q21",
    question: "Q21. I have difficulty concentrating.",
    section: "Depression and Anxiety",
    subsection: "",
    type: 2,
  },
  {
    name: "Q22",
    question: "Q22. I am happy with my family relationships.",
    section: "Depression and Anxiety",
    subsection: "",
    type: 2,
  },
  {
    name: "Q23",
    question: "Q23. I am comfortable being around others.",
    section: "Depression and Anxiety",
    subsection: "",
    type: 3,
  },
  {
    name: "Q24",
    question: "Q24. I have trouble sleeping.",
    section: "During the past week, how much trouble have you had with:",
    subsection: "",
    type: 3,
  },
  {
    name: "Q25",
    question: "Q25. I get tired easily.",
    section: "During the past week, how much trouble have you had with:",
    subsection: "",
    type: 3,
  },
  {
    name: "Q26",
    question: "Q26. I often feel depressed or sad.",
    section: "During the past week, how much trouble have you had with:",
    subsection: "",
    type: 3,
  },
  {
    name: "Q27",
    question: "Q27. I often feel nervous or anxious.",
    section: "During the past week, how much trouble have you had with:",
    subsection: "",
    type: 3,
  },
  {
    name: "Q28",
    question:
      "Q28. I often socialise with others (visit/talk with friends and relatives)?",
    section: "During the past week, how often did you:",
    subsection: "",
    type: 3,
  },
  {
    name: "Q29",
    question:
      "Q29. I take part in social, religious and recreational activities (sports, meetings, religious meetings & parties)?",
    section: "During the past week, how often did you:",
    subsection: "",
    type: 3,
  },
];

const sectionFamily = [
  {
    type: "header",
    header: "Family and Community Risk Factors",
    explanation:
      "These are aspects of a person (or group) and environment and life experiences that make it more likely (risk factors) that people will develop a given SUD problem or achieve an undesirable outcome.",
  },
  {
    name: "Q30",
    question: "Q30. Does your family have a history of substance use or abuse?",
    section: "Family & Community Risk Factors",
    subsection: "Family & Peer Risk Factors:",
    type: 4,
  },
  {
    name: "Q31",
    question:
      "Q31. Would you say that your parents have favourable attitudes towards substance use or abuse?",
    section: "Family & Community Risk Factors",
    subsection: "Family & Peer Risk Factors:",
    type: 4,
  },
  {
    name: "Q32",
    question:
      "Q32. Would you say that growing up your parents monitored your behaviour poorly?",
    section: "Family & Community Risk Factors",
    subsection: "Family & Peer Risk Factors:",
    type: 4,
  },
  {
    name: "Q33",
    question: "Q33. Do your parents have a history of substance use?",
    section: "Family & Community Risk Factors",
    subsection: "Family & Peer Risk Factors:",
    type: 4,
  },
  {
    name: "Q34",
    question:
      "Q34. Did you ever feel rejected by your family for your sexual orientation or gender identity?",
    section: "Family & Community Risk Factors",
    subsection: "Family & Peer Risk Factors:",
    type: 4,
  },
  {
    name: "Q35",
    question: "Q35. Did you ever associate with substance using peers?",
    section: "Family & Community Risk Factors",
    subsection: "Family & Peer Risk Factors:",
    type: 4,
  },
  {
    name: "Q36",
    question:
      "Q36. Growing up, did you ever feel a lack of school connectedness? (Belief held by learners that adults and peers in the school care about their learning as well as about them as individuals)",
    section: "Family & Community Risk Factors",
    subsection: "School Risk Factors:",
    type: 4,
  },
  {
    name: "Q37",
    question:
      "Q37. Would you describe your overall academic achievement as low?",
    section: "Family & Community Risk Factors",
    subsection: "School Risk Factors:",
    type: 4,
  },
  {
    name: "Q38",
    question:
      "Q38. Did you ever drop out of school, leave or stay away from school for extended periods of time?",
    section: "Family & Community Risk Factors",
    subsection: "School Risk Factors:",
    type: 4,
  },
  {
    name: "Q39",
    question:
      "Q39. Is your community characterised by low sense of belonging where it feels like people don’t care about others?",
    section: "Family & Community Risk Factors",
    subsection: "Community Risk Factors:",
    type: 4,
  },
  {
    name: "Q40",
    question:
      "Q40. Would you say that drugs & alcohol are freely available and easy to get in your community?",
    section: "Family & Community Risk Factors",
    subsection: "Community Risk Factors:",
    type: 4,
  },
  {
    name: "Q41",
    question:
      "Q41. Would you say that your community is marked by high levels of violence, poverty and unemployment?",
    section: "Family & Community Risk Factors",
    subsection: "Community Risk Factors:",
    type: 4,
  },
  {
    name: "Q42",
    question:
      "Q42. Would you say that your community has norms and laws that are favourable toward drug use, firearms, and crime?",
    section: "Family & Community Risk Factors",
    subsection: "Community Risk Factors:",
    type: 4,
  },
];
const sectionProtective = [
  {
    type: "header",
    header: "Assessment of Protective Factors",
    explanation:
      "Protective factors are conditions or attributes (skills, strengths, resources, supports or coping strategies) in individuals, families, communities or the larger society that help people deal more effectively with stressful events and mitigate or eliminate risk in families and communities.",
  },
  {
    name: "Q43",
    question:
      "Q43. Growing up, did you ever feel that your parent/s and/or family were involved with you showing an interest in your well-being?",
    section: "Assessment of Protective Factors for Substance Use Disorders",
    subsection: "Family Protective Factors:",
    type: 4,
  },
  {
    name: "Q44",
    question:
      "Q44. Growing up, did you ever feel that your parent/s and family supported healthy attitudes, behaviors, and a positive living environment?",
    section: "Assessment of Protective Factors for Substance Use Disorders",
    subsection: "Family Protective Factors:",
    type: 4,
  },
  {
    name: "Q45",
    question:
      "Q45. Growing up, did you ever feel that your parent/s showed disapproval for substance use?",
    section: "Assessment of Protective Factors for Substance Use Disorders",
    subsection: "Family Protective Factors:",
    type: 4,
  },
  {
    name: "Q46",
    question:
      "Q46. Growing up, did you ever feel that your parent/s helped you to build trusting relationships with others to talk about sensitive issues such as sexual and mental health, substance use, and safety from bullying?",
    section: "Assessment of Protective Factors for Substance Use Disorders",
    subsection: "Family Protective Factors:",
    type: 4,
  },
  {
    name: "Q47",
    question:
      "Q47. Growing up did you feel that your parent/s used effective monitoring practices to help you make healthy decisions and avoid risky behaviors?(For example,unprotected sex, underage drinking and smoking)",
    section: "Assessment of Protective Factors for Substance Use Disorders",
    subsection: "Family Protective Factors:",
    type: 4,
  },
  {
    name: "Q48",
    question: "Q48. Do you mostly associate with positive peers and friends?",
    section: "Assessment of Protective Factors for Substance Use Disorders",
    subsection: "Family Protective Factors:",
    type: 4,
  },
  {
    name: "Q49",
    question:
      "Q49. Growing up did you feel a strong sense of school connectedness?(Belief held by students that adults and peers in the school care about their learning as well as about them as individuals)",
    section: "Assessment of Protective Factors for Substance Use Disorders",
    subsection: "School Protective Factors:",
    type: 4,
  },
  {
    name: "Q50",
    question:
      "Q50. Would you describe your overall academic achievement as good?",
    section: "Assessment of Protective Factors for Substance Use Disorders",
    subsection: "School Protective Factors:",
    type: 4,
  },
  {
    name: "Q51",
    question: "Q51. Would you describe your community as safe?",
    section: "Assessment of Protective Factors for Substance Use Disorders",
    subsection: "Community Protective Factors:",
    type: 4,
  },
  {
    name: "Q52",
    question:
      "Q52. Do you feel that people in your community and neighbourhood are supportive and connected to each other?",
    section: "Assessment of Protective Factors for Substance Use Disorders",
    subsection: "Community Protective Factors:",
    type: 4,
  },
  {
    name: "Q53",
    question:
      "Q53. Do you feel that there are a range of opportunities in the community for meaningful youth engagement?",
    section: "Assessment of Protective Factors for Substance Use Disorders",
    subsection: "Community Protective Factors:",
    type: 4,
  },
  {
    name: "Q54",
    question:
      "Q54. Do you think that there are policies and practices in your community that support healthy norms and lifestyle choices?",
    section: "Assessment of Protective Factors for Substance Use Disorders",
    subsection: "Community Protective Factors:",
    type: 4,
  },
  {
    name: "Q55",
    question: "Q55. I really want to make changes in my use of drugs/alcohol.",
    section:
      "Stages of Change Readiness and Treatment Eagerness Scale (SOCRATES 8A)",
    subsection: "",
    type: 2,
  },
];
const sectionChangeReadiness = [
  {
    type: "header",
    header: "Change Readiness",
  },
  {
    name: "Q56",
    question: "Q56. Sometimes I wonder if I am an addict.",
    section:
      "Stages of Change Readiness and Treatment Eagerness Scale (SOCRATES 8A)",
    subsection: "",
    type: 5,
  },
  {
    name: "Q57",
    question:
      "Q57. If I don't change my drug/alcohol use soon, my problems are going to get worse.",
    section:
      "Stages of Change Readiness and Treatment Eagerness Scale (SOCRATES 8A)",
    subsection: "",
    type: 5,
  },
  {
    name: "Q58",
    question:
      "Q58. I have already started making some changes in my use of drugs/alcohol.",
    section:
      "Stages of Change Readiness and Treatment Eagerness Scale (SOCRATES 8A)",
    subsection: "",
    type: 5,
  },
  {
    name: "Q59",
    question:
      "Q59. I was using drugs/alcohol too much at one time, but I've managed to change that.",
    section:
      "Stages of Change Readiness and Treatment Eagerness Scale (SOCRATES 8A)",
    subsection: "",
    type: 5,
  },
  {
    name: "Q60",
    question:
      "Q60. Sometimes I wonder if my drug/alcohol use is hurting other people.",
    section:
      "Stages of Change Readiness and Treatment Eagerness Scale (SOCRATES 8A)",
    subsection: "",
    type: 5,
  },
  {
    name: "Q61",
    question: "Q61. I have a drug/alcohol problem.",
    section:
      "Stages of Change Readiness and Treatment Eagerness Scale (SOCRATES 8A)",
    subsection: "",
    type: 5,
  },
  {
    name: "Q62",
    question:
      "Q62. I'm not just thinking about changing my drug/alcohol use, I'm already doing something about it.",
    section:
      "Stages of Change Readiness and Treatment Eagerness Scale (SOCRATES 8A)",
    subsection: "",
    type: 5,
  },
  {
    name: "Q63",
    question:
      "Q63. I have already changed my drug/alcohol use, and I am looking for ways to keep from slipping back to my old pattern.",
    section:
      "Stages of Change Readiness and Treatment Eagerness Scale (SOCRATES 8A)",
    subsection: "",
    type: 5,
  },
  {
    name: "Q64",
    question: "Q64. I have serious problems with drugs/alcohol.",
    section:
      "Stages of Change Readiness and Treatment Eagerness Scale (SOCRATES 8A)",
    subsection: "",
    type: 5,
  },
  {
    name: "Q65",
    question:
      "Q65. Sometimes I wonder if I am in control of my drug/alcohol use.",
    section:
      "Stages of Change Readiness and Treatment Eagerness Scale (SOCRATES 8A)",
    subsection: "",
    type: 5,
  },
  {
    name: "Q66",
    question: "Q66. My drug/alcohol use is causing a lot of harm.",
    section:
      "Stages of Change Readiness and Treatment Eagerness Scale (SOCRATES 8A)",
    subsection: "",
    type: 5,
  },
  {
    name: "Q67",
    question:
      "Q67. I am actively doing things now to cut down or stop my use of drugs/alcohol.",
    section:
      "Stages of Change Readiness and Treatment Eagerness Scale (SOCRATES 8A)",
    subsection: "",
    type: 5,
  },
  {
    name: "Q68",
    question:
      "Q68. I want help to keep from going back to the drug/alcohol problems that I had before.",
    section:
      "Stages of Change Readiness and Treatment Eagerness Scale (SOCRATES 8A)",
    subsection: "",
    type: 5,
  },
  {
    name: "Q69",
    question: "Q69. I know that I have a drug/alcohol problem.",
    section:
      "Stages of Change Readiness and Treatment Eagerness Scale (SOCRATES 8A)",
    subsection: "",
    type: 5,
  },
  {
    name: "Q70",
    question:
      "Q70. There are times when I wonder if I use drugs/alcohol too much.",
    section:
      "Stages of Change Readiness and Treatment Eagerness Scale (SOCRATES 8A)",
    subsection: "",
    type: 5,
  },
  {
    name: "Q71",
    question: "Q71. I am a drug/alcohol addict.",
    section:
      "Stages of Change Readiness and Treatment Eagerness Scale (SOCRATES 8A)",
    subsection: "",
    type: 5,
  },
  {
    name: "Q72",
    question: "Q72. I am working hard to change my drug/alcohol use.",
    section:
      "Stages of Change Readiness and Treatment Eagerness Scale (SOCRATES 8A)",
    subsection: "",
    type: 5,
  },
  {
    name: "Q73",
    question:
      "Q73. I have made some changes in my drug/alcohol use, and I want some help to keep from going back to the way I used before.",
    section:
      "Stages of Change Readiness and Treatment Eagerness Scale (SOCRATES 8A)",
    subsection: "",
    type: 5,
  },
];


const allQuestions = sectionScreening.concat(
  sectionRisks,
  sectionTrauma,
  sectionDepression,
  sectionFamily,
  sectionProtective,
  sectionChangeReadiness,
  
);

function GetQuestion({ questionNumber }) {
         /**
      * Returns the string question when given a question number
      */
  let question = allQuestions.find(questionNumber)["question"];
  return question;
}

export {
  sectionScreening,
  sectionRisks,
  sectionTrauma,
  sectionProtective,
  sectionDepression,
  sectionChangeReadiness,
  sectionFamily,
  allQuestions,
  GetQuestion
};
