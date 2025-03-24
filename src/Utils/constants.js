export const METHOD_TYPE = {
   GET: 'get',
   POST: 'post',
   PUT: 'put',
   DELETE: 'delete',
   PATCH: 'patch',
}

const quMetrics = [
   {
      label: 'Please estimate the number of close relationships you maintain in your everyday life.  This would include members of your family, people from your work experience, and people from any community or religious organization.',
      field: 'qu1',
      type: 'integer',
      default: 3
   },
   {
      label: 'If you have experience from an internship, how many people provided useful guidance? Please consider including teachers or staff, internship mentors, internship coworkers, coaches, and peer interns.',
      field: 'qu2',
      type: 'integer',
      default: 2
   },
   {
      label: 'During the past 6 months, how many people have provided advice, information, resources, or help with important matters?',
      field: 'qu3',
      type: 'integer',
      default: 4
   },
]

const qaMetrics = [
   {
      label: 'I feel like the coaches have created a comfortable and safe environment',
      field: 'qn1',
      type: 'integer',
      default: 4
   },
   {
      label: 'How well connected do you feel to the adults you are working with at your internship right now?',
      field: 'qn2',
      type: 'integer',
      default: 3
   },
   {
      label: 'I feel comfortable asking my advisor questions related to my application process.',
      field: 'qn3',
      type: 'integer',
      default: 2
   },
]

const sMetrics = [
   {
      label: 'I have people in my network who I am close to that help me pursue my education or career goals',
      field: 's1',
      type: 'string',
      default: 'Strongly Agree'
   },
   {
      label: 'I have people in my network who I am less close to but who are influential in helping me reach my education or career goals',
      field: 's2',
      type: 'integer',
      default: 3
   },
   {
      label: 'I have people in my network who help me when they say they are going to help me.',
      field: 's3',
      type: 'string',
      default: 'Agree'
   },
]

const aMetrics = [
   {
      label: 'How often do you reach out to your network to find information about open job positions per month',
      field: 'a1',
      type: 'integer',
      default: 2
   },
   {
      label: 'When working towards my education or career goals, I ask for help when I need it',
      field: 'a2',
      type: 'string',
      default: 'Strongly Agree'
   },
   {
      label: 'How likely would you be to ask a person for help with your career in the future?',
      field: 'a3',
      type: 'integer',
      default: 3
   }
]

export const DIMENSIONS = [
   {title: 'Quantity of Relationships', color: 'black', metrics: quMetrics},
   {title: 'Quality of Relationships', color: '#339933', metrics: qaMetrics},
   {title: 'Structure of Relationships', color: '#cd3333', metrics: sMetrics},
   {title: 'Ability to Mobilize Relationships', color: '#65b7e7', metrics: aMetrics},
]
