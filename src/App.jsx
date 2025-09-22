
import './App.css'
import Greeting from './Greeting';
import First from './First';
import User from './User';
import Product from './Product';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import Avatar from './Avatar';
import CustomButton from './CustomButton';
import Article from './Article';
import List from './List';
import Status from './Status';
// import Profile from './Profile';
// import Button from './Button';
// import Profile from './components/Profile';
// import Modal from './components/Modal';
import Card from './lesson-10/card';
import Listt from './lesson-10/Listt';
import StatusMessage from './lesson-10/StatusMessage';
import ColorButton from './lesson-10/ColorButton';
import Alert from './lesson-10/Alert';




function App() {
// let age = 34;
// const arr=["Apple", "Banana", "Orange"];
// let txt =  "Hello React"
// let isStudent = true;
// let agee = 18;
// let PrL=["React", "Angular", "Vue"];
 const fruits = ['ვაშლი', 'მსხალი', 'ატამი', 'ბანანი'];
  return (
<div>
 {/* <h1>"hello React!"</h1>  
 <p>ჩემი ასაკი არის {age}</p>  
<h2 style={{color:"blue"}}>{txt}</h2>
<div>
  {isStudent?<p>გამარჯობა სტუდენტო!</p>:<p>კეთილი იყოს შენი მობრძანებ!</p>}
</div>
<ul>{arr.map((item)=>(
  <li>{item}</li>
))}</ul>
  <p>
        {agee > 18 ? 'შენ ხარ სრულწლოვანი' : 'შენ ხარ არასრულწლოვანი'}
  </p>


{PrL.includes("React")? <p>React ნაპოვნია</p>:<p>React ვერ მოიძებნა</p>}




<Greeting/>
<First/>
<User name="ნინო"  />
<Product title="ლეპტოპი" price="2000₾"/>
<Header/>
<Content/>
<Footer/>
<Avatar url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqEhN2Nk4_i8uc8QTunpCv_UAsEpJU2sFVTa2z8H6uFIruimJcpEreF7wJs7kqxiAjDUs&usqp=CAU"/>
<CustomButton label="დაჭირე აქ"/>
<Article title="სათაური" txt="დავწეროთ რაიმე ტექსტი" />
<List items={["React", "JavaScript", "HTML"]}/>
<Status online/>
<Profile name="mari" isAdmin={true}/>
<Button primary={true}/> */}

{/* <Profile isAdmin={false}/>

<Modal header="title" footer="footer" >
  <p>text</p>
  
   </Modal> */}

{/* //დაწერე კომპონენტი Card, რომელიც იღებს childrenს და აჩვენებს მას შიგნით. */}

<Card> 
   <h2>სათაური</h2>
  <p>ეს არის ტექსტი</p>
</Card>

<Listt items={fruits} />
<StatusMessage isOnline={true}/>
<ColorButton label="წაშლა" color="red" />
 <Alert type="success">
        <strong>შესანიშნავია!</strong> თქვენი პროფილი წარმატებით განახლდა.
      </Alert>



</div>
    
  )
}

export default App
