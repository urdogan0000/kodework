export default function (state, action) {
  switch (action.type) {
    case 'ADD_FAVOURİTE_JOB':
      const {job} = action.payload;
      let newList = [...state.favouriteJobs, job];

      return {...state, favouriteJobs: newList};
    case 'REMOVE_FAVOURİTE_JOB':
      const {id} = action.payload;
      let removedList=state.favouriteJobs.filter(job=>job.id!=id)
      

      return {...state, favouriteJobs: removedList};

    default:
      return state;
  }
}
