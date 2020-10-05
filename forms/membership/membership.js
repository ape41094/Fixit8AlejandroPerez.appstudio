
let members = ["Mary","Sam","Joey","Paul","Mike","Char","Jenny","Kennedy","Kaden","Kurt","Anne"]


btnSubmitMember.onclick=function(){
  members = inptMember.value
  if (members.includes(InptMember.value))
  memberLabel.value = "You are a member" + InptMember.value
  else { 
   memberLabel.value = "You are not a member" 
   members.push(Inptmember.value) 
   console.log(members)}
  }


