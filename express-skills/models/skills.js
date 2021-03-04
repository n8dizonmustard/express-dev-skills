const skills = [
    {id: 1, skill: 'HTML', progress: true},
    {id: 2, skill: 'CSS', progress: true},
    {id: 3, skill: 'JavaScript', progress: false},
    {id: 4, skill: 'Node', progress: false},
    {id: 5, skill: 'Express', progress: false}
  ];
  
  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
  };
  
  function deleteOne(id){
    const idx = skills.findIndex(skill => skill.id === parseInt(id));
    skills.splice(idx, 1);
  }

  function getAll(){
    return skills;
  }

  function getOne(id){
      return skills.find(skill => skill.id === parseInt(id));
  }

  function create(skill) {
    skill.id = Date.now() % 1000000;
    skill.progress = false;
    skills.push(skill);
  }