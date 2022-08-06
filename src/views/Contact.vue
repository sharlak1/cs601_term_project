<template>
  <div class="container">
<h1>Contact Us</h1>
  <hr width="170" color="#77c66e">
<form class="form1" action="">
      <label for="firstName" class="first-name">First Name</label>
      <input id="firstName" type="text" placeholder="Enter your first name" v-model="User.first_name">

      <label for="lastName" class="last-name">Last Name</label>
      <input id="lastName" type="text" placeholder="Enter your last name" v-model="User.last_name">

      <label for="emails">Email</label>
      <input id="email" type="email" placeholder="Enter your email id" v-model="User.email">

     <label for="job">Message</label>
      <input id="job" type="text" placeholder="Enter your message" v-model="User.msg"> 

            <button class="btn btn-outline-success" type="submit" @click="addUserDetails">Submit</button>
        </form>
  </div>
  <table border="0" width="100%" cellpadding="0" cellspacing="0" bgcolor="#353535">
  <tr>
  	 <td>
  	 	<table border="0" width="85%" cellpadding="15" cellspacing="0" align="center">
  	 	
  	 	<tr>
  	 		<td width="33.33%" valign="top">
  	 		   <table border="0" width="100%" cellpadding="15" cellspacing="0" align="center">
  	 		   	 <tr>
  	 		   	 	<td align="center" valign="top">
  	 		   	 		<font color="#77c66e" size="6">
  	 		   	 			<span class="fa fa-phone"></span>
  	 		   	 		</font>
  	 		   	 		<br/><br/>
  	 		   	 		<font color="#ffffff" size="5" face="arial">
  	 		   	 		Phone No
  	 		   	 	    </font>
  	 		   	 	    <p>
  	 		   	 	      <font color="#c2c0c3" size="3" face="arial">
  	 		   	 	    +1234567890
  	 		   	 	     </font>
  	 		   	 	    </p>
  	 		   	 	</td>
  	 		   	 </tr>
  	 		   </table>
  	 		</td>

  	 		<td width="33.33%" valign="top">
  	 		   <table border="0" width="100%" cellpadding="15" cellspacing="0" align="center">
  	 		   	 <tr>
  	 		   	 	<td align="center" valign="top">
  	 		   	 		<font color="#77c66e" size="6">
  	 		   	 			<span class="fa fa-envelope"></span>
  	 		   	 		</font>
  	 		   	 		<br/><br/>
  	 		   	 		<font color="#ffffff" size="5" face="arial">
  	 		   	 		Email
  	 		   	 	    </font>
  	 		   	 	    <p>
  	 		   	 	      <font color="#c2c0c3" size="3" face="arial">
  	 		   	 	    	sharlak@bu.edu
  	 		   	 	     </font>
  	 		   	 	    </p>
  	 		   	 	</td>
  	 		   	 </tr>
  	 		   </table>
  	 		</td>

  	 		<td width="33.33%" valign="top">
  	 		   <table border="0" width="100%" cellpadding="15" cellspacing="0" align="center">
  	 		   	 <tr>
  	 		   	 	<td align="center" valign="top">
  	 		   	 		<font color="#77c66e" size="6">
  	 		   	 			<span class="fa fa-map-marker"></span>
  	 		   	 		</font>
  	 		   	 		<br/><br/>
  	 		   	 		<font color="#ffffff" size="5" face="arial">
  	 		   	 		Location
  	 		   	 	    </font>
  	 		   	 	    <p>
  	 		   	 	      <font color="#c2c0c3" size="3" face="arial">
  	 		   	 	    Boston, MA
  	 		   	 	     </font>
  	 		   	 	    </p>
  	 		   	 	</td>
  	 		   	 </tr>
  	 		   </table>
  	 		</td>
  	 	</tr>
  	 	<tr>
  	 		<td colspan="3">
  	 			<hr noshade>
  	 		</td>
  	 	</tr>
  	 	<tr>
  	 		<td colspan="3" height="100" valign="top">
  	 			<table border="0" width="30%" cellpadding="0" cellspacing="0" align="center">
  	 				
  	 				<tr>
  	 					 <td width="25%" align="center">
  	 					 	<table border="0" width="50" cellpadding="0" cellspacing="0" align="center" height="50" bgcolor="#77c66e">
  	 					 		<tr>
  	 					 			<td align="center" valign="middle">
  	 					 				<a  href="http://linkedin.com/in/lakshitaasharma">
  	 					 				<font size="5" color="#ffffff">
  	 					 				<span class="fa fa-linkedin">
                        </span>
  	 					 			   </font>
  	 					 			   </a>
  	 					 			</td>
  	 					 		</tr>
  	 					 	
  	 					 	</table>
  	 					 </td>
  	 					 <td width="25%" align="center">
  	 					 	<table border="0" width="50" cellpadding="0" cellspacing="0" align="center" height="50" bgcolor="#77c66e">
  	 					 		<tr>
  	 					 			<td align="center" valign="middle">
  	 					 				<a href="">
  	 					 				<font size="5" color="#ffffff">
  	 					 				<span class="fa fa-google-plus" onclick="location.href='mailto:sharlak@bu.edu';"></span>
  	 					 			   </font>
  	 					 			   </a>
  	 					 			</td>
  	 					 		</tr>
  	 					 	
  	 					 	</table>
  	 					 </td>
  	 				</tr>
  	 			</table>
  	 		</td>
  	 	</tr>
  	 	</table>
  	</td>
  </tr>
 </table>
</template>


<script>
import axios from 'axios';
export default {
data() {
    return {
        User: {first_name:'', last_name:'', email:'', msg:''},
    }
},
methods: {
    addUserDetails(){
        let newUser = {
            first_name: this.User.first_name,
            last_name: this.User.last_name,
            email: this.User.email,
        msg: this.User.msg
        }
        console.log(newUser);
        alert("Thank you for reaching out. I'll get back to you soon!")
        var querystring = require('querystring');

        axios.post('http://localhost:3000/users',querystring.stringify(newUser),
        {headers: { 
        "Content-Type": "application/x-www-form-urlencoded"
      }})
        .then((response) => {
            console.log(response);
            this.$router.push('/view')
                  this.student = {
                    first_name: '',
                    last_name: '',
                    email: '',
                    msg:''
        }
        }
        )
        .catch((error) => {
            console.log(error)
        });
    }
}
}
</script>

<style>

* {
  box-sizing: border-box;
}
h1 {
    text-align: center !important;
    padding-top:10px;
    color: #b8e4b4;
}
form {
  padding: 1em;
  background: #f9f9f9;
  border: 1px solid #c1c1c1;
  margin-top: 5rem;
  margin-bottom: 70px;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  padding: 1em;
}
form input {
  margin-bottom: 1rem;
  background: #fff;
  border: 1px solid #9c9c9c;
}
form button {
  background: lightgrey;
  padding: 0.7em;
  border: 0;
}
form button:hover {
  background: gold;
}

label {
  text-align: right;
  display: block;
  padding: 0.5em 1.5em 0.5em 0;
}

input {
  width: 100%;
  padding: 0.7em;
  margin-bottom: 0.5rem;
}
input:focus {
  outline: 3px solid gold;
}

@media (min-width: 400px) {
  form {
    overflow: hidden;
    padding:10px;
  }

  label {
    float: left;
    width: 200px;
  }

  input {
    float: left;
    width: calc(100% - 200px);
  }

  button {
    float: right;
    width: calc(100% - 200px);
  }
}
</style>