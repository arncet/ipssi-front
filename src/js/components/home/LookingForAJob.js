import React from 'react'

//Components
import Job from './Job'

const jobs = [
  { id: 1, title: 'Lorem ipsum Esse', description: 'Lorem ipsum Ut fugiat exercitation veniam elit Ut deserunt nostrud anim Excepteur ut exercitation occaecat in proident exercitation nisi ea Excepteur deserunt deserunt ullamco sed tempor dolore sed Ut proident Ut consectetur eiusmod aute magna labore elit irure incididunt.', date: 1472215201483 },
  { id: 2, title: 'Lorem ipsum Esse', description: 'Lorem ipsum Ut fugiat exercitation veniam elit Ut deserunt nostrud anim Excepteur ut exercitation occaecat in proident exercitation nisi ea Excepteur deserunt deserunt ullamco sed tempor dolore sed Ut proident Ut consectetur eiusmod aute magna labore elit irure incididunt.', date: 1472215201483 },
  { id: 3, title: 'Lorem ipsum Esse', description: 'Lorem ipsum Ut fugiat exercitation veniam elit Ut deserunt nostrud anim Excepteur ut exercitation occaecat in proident exercitation nisi ea Excepteur deserunt deserunt ullamco sed tempor dolore sed Ut proident Ut consectetur eiusmod aute magna labore elit irure incididunt.', date: 1472215201483 },
  { id: 4, title: 'Lorem ipsum Esse', description: 'Lorem ipsum Ut fugiat exercitation veniam elit Ut deserunt nostrud anim Excepteur ut exercitation occaecat in proident exercitation nisi ea Excepteur deserunt deserunt ullamco sed tempor dolore sed Ut proident Ut consectetur eiusmod aute magna labore elit irure incididunt.', date: 1472215201483 },
  { id: 4, title: 'Lorem ipsum Esse', description: 'Lorem ipsum Ut fugiat exercitation veniam elit Ut deserunt nostrud anim Excepteur ut exercitation occaecat in proident exercitation nisi ea Excepteur deserunt deserunt ullamco sed tempor dolore sed Ut proident Ut consectetur eiusmod aute magna labore elit irure incididunt.', date: 1472215201483 },
  { id: 6, title: 'Lorem ipsum Esse', description: 'Lorem ipsum Ut fugiat exercitation veniam elit Ut deserunt nostrud anim Excepteur ut exercitation occaecat in proident exercitation nisi ea Excepteur deserunt deserunt ullamco sed tempor dolore sed Ut proident Ut consectetur eiusmod aute magna labore elit irure incididunt.', date: 1472215201483 }
]

const LookingForAJob = () => (
  <div className="Looking_for_a_job">
    <h2 className="Looking_for_a_job_title">Postes à pourvoir : </h2>
    <ul className="Looking_for_a_job_list">
      { jobs.map((job, i) => <Job job={ job } key={ i }/>) }
    </ul>
  </div>
)

export default LookingForAJob
