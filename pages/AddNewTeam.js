import React from 'react'

const AddNewTeam = () => {
  return (
<div className='container'style={{width:'',height:'',left:'',top:'',background:'#2A3240',borderRadius:'4px',position:'relative', }}>
   <div className='row mt-5'style={{width:'309px',height:'28px',left:'39px',top:'31px', fontFamily:'Roboto',fontStyle:'normal',fontWeight:'500px',fontSize:'24px',lineHeight:'28px',textAlign:'center',color:'#ffffff',position:'relative'}}>Add New Team/Organization</div>
<form class="row g-2 mt-5 "style={{marginLeft:'15px'}}>
   <div className='row'>
  <div class="col-md-6">
    <label for="Category" class="form-label">Select Category :</label>
    <select id="Category" class="form-select">
      <option selected>Select Category</option>
      <option>one</option>
      <option>two</option>
      <option>three</option>
    </select>
  </div>
  <div class="col-md-6">
    <label for="Game" class="form-label">Select Game:</label>
    <select id="Game" class="form-select" >
      <option selected >Select Game</option>
      <option>one</option>
      <option>two</option>
      <option>three</option>
    </select>
  </div>
  </div>
  <div className='row'>
  <div class="col-md-6">
    <label for="inputName" class="form-label">Team Name:</label>
    <input type="text" class="form-control" placeholder="Team Name" aria-label="Team Name" aria-describedby="basic-addon1"/>
  </div>
  <div class="col-md-6">
  <label for="basic-url" class="form-label">Team URL name:</label>
<div class="input-group mb-3">
  <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3"placeholder="Ex. RockUSA" aria-label="Ex. RockUSA"/>
</div>
  </div>
  </div>
  <div className='row'>
  <div class="col-md-6">
  <label for="startDate" class="form-label">Start</label>
<input id="startDate" class="form-control" type="date" />
  </div>
  </div>
  <div className='row'>
  <div class="col-md-3">
    <label for="inputState" class="form-label">Country:</label>
    <select id="inputState" class="form-select">
      <option selected>Select Country</option>
      <option>1</option>
      <option>2</option>
      <option>3</option>
    </select>
  </div>
  <div class="col-md-3">
    <label for="inputState" class="form-label">States:</label>
    <select id="inputState" class="form-select">
      <option selected>Select States</option>
      <option>1</option>
      <option>2</option>
      <option>3</option>
    </select>
  </div>
  </div>
  <div className='row'>
  <div class="col-md-6">
    <label for="inputName" class="form-label">Owner:</label>
    <input type="text" class="form-control" placeholder="Owner" aria-label="Owner" aria-describedby="basic-addon1"/>
  </div>
  </div>
  <div className='row'>
  <div class="col-md-6">
  <label for="inputName" class="form-label" style={{width:'153px',height:'16px'}}>Description (250 words):</label>
  <textarea class="form-control" aria-label="With textarea" style={{width:'',height:'122px'}}></textarea>
</div>
</div>
 <div className='row ml-2' style={{marginTop:'203px'}}>
  <div class="col-md-3 col-sm-3">
  <button type="submit" class="btn1 btn-primary" style={{marginLeft:'',marginRight:'',width:'174px',height:'42px',marginBottom:'32px',background:' #2199C1'}}>submit</button>
  </div>
  <div className='col-md-3 col-sm-3'>
    <button type="submit" class="btn2 btn-danger" style={{marginLeft:'21px',marginRight:'',width:'174px',height:'42px',marginBottom:'32px',background: '#E54547'}}>close</button>
  </div>
  </div>
</form>
</div>
  )
}

export default AddNewTeam