import React, { useRef,useEffect, useState } from 'react';
import './App.css';

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';


firebase.initializeApp({
  apiKey: "AIzaSyCnkSyKahsIcLyjwJsdqxuULdo3O3aD-Ig",
  authDomain: "chatchat-e597a.firebaseapp.com",
  projectId: "chatchat-e597a",
  storageBucket: "chatchat-e597a.appspot.com",
  messagingSenderId: "130111058699",
  appId: "1:130111058699:web:caeb1cb59e6532a1ebe80e",
  measurementId: "G-Z742TK2VR3"
})

const auth = firebase.auth();
const firestore = firebase.firestore();


function App() {
  const [user] = useAuthState(auth);
  return (
    <div className="App">
      <header>
        <svg xmlns="http://www.w3.org/2000/svg" width="300px" viewBox="0 0 375 375" height="500" version="1.0"><defs><clipPath id="a"><path d="M48 148.348h68v78H48Zm0 0"/></clipPath></defs><g clip-path="url(#a)"><path d="M84.625 226.035a70.876 70.876 0 0 0 15.316-10.52 39.208 39.208 0 0 0 3.028-3.003l1.246-1.414c.637-.688 1.2-1.41 1.808-2.184.61-.777 1.415-1.766 1.98-2.68a43.373 43.373 0 0 0 3.509-6.007 53.547 53.547 0 0 0 1.527-3.5 40.493 40.493 0 0 0 2.363-9.633c.114-.918.196-1.836.254-2.75a33.518 33.518 0 0 0-3.23-16.848 33.38 33.38 0 0 0-5.781-8.457 33.247 33.247 0 0 0-4.399-3.95 33.772 33.772 0 0 0-5.02-3.124 34.213 34.213 0 0 0-5.492-2.2 34.071 34.071 0 0 0-5.793-1.206 17.03 17.03 0 0 1-1.894-.211h-4.469c0 .113-.156.07-.242.082a33.792 33.792 0 0 0-8.816 1.914 33.882 33.882 0 0 0-9.684 5.43 34.08 34.08 0 0 0-4.047 3.828 33.396 33.396 0 0 0-3.36 4.433c-1 1.57-1.863 3.211-2.59 4.922a33.06 33.06 0 0 0-1.745 5.281 33.829 33.829 0 0 0-.86 5.492 33.933 33.933 0 0 0 2.153 14.754c.3.79.644 1.559 1.031 2.313l.281.578a33.674 33.674 0 0 0 7.074 9.465 33.315 33.315 0 0 0 4.922 3.86 33.14 33.14 0 0 0 5.555 2.882 33.665 33.665 0 0 0 12.223 2.469c.394 0 .507.097.492.508v7.953c.008.152.031.304.078.449.043.148.105.285.184.418.078.129.175.246.285.355a1.862 1.862 0 0 0 .781.45c.148.039.3.062.453.062a1.714 1.714 0 0 0 .879-.21Zm.48-52.96a1.827 1.827 0 0 1 .863-1.906c.274-.169.571-.247.891-.24h12.547c1.117 0 1.754.989 1.754 2.27v14.781a10.748 10.748 0 0 1-.465 3.09 10.616 10.616 0 0 1-1.328 2.825 10.678 10.678 0 0 1-2.09 2.328 10.69 10.69 0 0 1-2.668 1.632l-.28.141h-.243a19.06 19.06 0 0 1-2.473.55.91.91 0 0 1-1.054-.44.86.86 0 0 1-.106-.391v-4.376c0-.616.238-.886 1.016-1.054a5.43 5.43 0 0 0 2.66-1.258 5.176 5.176 0 0 0 1.586-3.187h-8.797a1.717 1.717 0 0 1-.715-.125 1.738 1.738 0 0 1-.996-1.008 1.719 1.719 0 0 1-.113-.715v-12.836s.011-.054.011-.082Zm-6.265 14.878c.008 1.512-.3 2.957-.918 4.336a10.431 10.431 0 0 1-2.617 3.578l-.352.336a11.142 11.142 0 0 1-3.933 2.031c-.622.157-1.247.274-1.88.356a.88.88 0 0 1-.617-.133.871.871 0 0 1-.375-.504v-4.074c0-.395-.14-.832.184-1.188.156-.18.352-.296.582-.351a7.548 7.548 0 0 0 2.078-.703 4.77 4.77 0 0 0 1.457-1.309c.39-.539.66-1.133.805-1.781l.226-.707h-8.656a2.591 2.591 0 0 1-.734-.07 1.684 1.684 0 0 1-.914-.598 1.71 1.71 0 0 1-.371-1.024v-13.003a1.9 1.9 0 0 1 .05-.993c.102-.328.278-.609.528-.843a1.57 1.57 0 0 1 1.074-.422h12.629c1.117 0 1.742.351 1.742 2.27.012.355.043 10.07.012 14.796Zm0 0"/></g><path d="M142.572 198.927c7.148 0 12.781-4.29 14.515-11.137h-3.855c-1.605 4.637-5.547 7.41-10.66 7.41-6.758 0-11.652-4.895-11.652-11.871 0-6.977 4.894-11.957 11.652-11.957 4.984 0 8.883 2.64 10.488 7.015h3.899c-1.735-6.539-7.368-10.699-14.387-10.699-9.012 0-15.555 6.543-15.555 15.64 0 9.057 6.543 15.6 15.555 15.6Zm31.413-24.352c-3.383 0-6.2 1.387-8.016 3.684v-11.524h-3.683v31.715h3.683v-12.738c0-4.375 3.074-7.801 7.106-7.801 4.027 0 6.28 2.687 6.28 7.41v13.129h3.684v-13.996c0-6.066-3.468-9.879-9.054-9.879Zm36.087.477-.476 3.597c-2.164-2.554-5.414-4.074-9.227-4.074-6.933 0-12.133 5.2-12.133 12.219 0 6.933 5.2 12.176 12.133 12.176 3.813 0 7.016-1.516 9.184-4.028l.39 3.508h3.032v-23.398Zm-9.445 20.367c-4.938 0-8.621-3.727-8.621-8.668 0-4.895 3.683-8.621 8.62-8.621 4.985 0 8.58 3.683 8.58 8.62 0 4.985-3.595 8.669-8.58 8.669Zm29.46-.348c-3.203 0-4.938-1.734-4.938-4.898v-11.786h7.367v-3.335h-7.366v-4.938h-.562l-7.24 7.626v.648h4.118v11.918c0 5.066 3.12 8.144 8.144 8.144h3.035v-3.379Zm21.359 3.856c7.148 0 12.781-4.29 14.515-11.137h-3.855c-1.605 4.637-5.547 7.41-10.66 7.41-6.758 0-11.652-4.895-11.652-11.871 0-6.977 4.894-11.957 11.652-11.957 4.984 0 8.883 2.64 10.488 7.015h3.899c-1.735-6.539-7.368-10.699-14.387-10.699-9.012 0-15.555 6.543-15.555 15.64 0 9.057 6.543 15.6 15.555 15.6Zm31.413-24.352c-3.383 0-6.2 1.387-8.016 3.684v-11.524h-3.683v31.715h3.683v-12.738c0-4.375 3.074-7.801 7.106-7.801 4.027 0 6.28 2.687 6.28 7.41v13.129h3.684v-13.996c0-6.066-3.468-9.879-9.054-9.879Zm36.087.477-.476 3.597c-2.164-2.554-5.414-4.074-9.227-4.074-6.933 0-12.133 5.2-12.133 12.219 0 6.933 5.2 12.176 12.133 12.176 3.813 0 7.016-1.516 9.184-4.028l.39 3.508h3.032v-23.398Zm-9.445 20.367c-4.938 0-8.621-3.727-8.621-8.668 0-4.895 3.683-8.621 8.62-8.621 4.985 0 8.58 3.683 8.58 8.62 0 4.985-3.595 8.669-8.58 8.669Zm29.459-.348c-3.203 0-4.938-1.734-4.938-4.898v-11.786h7.367v-3.335h-7.366v-4.938h-.562l-7.24 7.626v.648h4.118v11.918c0 5.066 3.12 8.144 8.144 8.144h3.035v-3.379Zm0 0"/></svg>
        {user ? <SignOut /> : <SignIn /> }
      </header>
      <div className='chatbox'>
        <section>
          {/*Se om brukeren er logget inn eller ikke*/}
          {user ? <ChatRoom /> : <SignIn />}
        </section>
      </div>
    </div>
  );
}

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }
 

  return (
    <button onClick={signInWithGoogle}>Sign in with Google</button>
  )
}

function SignOut() {
  return auth.currentUser && (
    <button onClick={() => auth.signOut()}>Sign Out</button>
  )

}


function ChatRoom() {
  const dummy = useRef();
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(60);
  
  const [formValue, setFormValue] = useState('');
  const messagesEndRef = useRef(null);
  const [messages] = useCollectionData(query, { idField: 'id' });

  

  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;
    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL
    })
    setFormValue('');

    dummy.current.scrollIntoView({ behavior: 'smooth' });
    
  }

  return (
    <>
      <main>
        {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
        <span ref={dummy} ></span>
        <div ref={messagesEndRef} />
      </main>
      
      <div></div>


      <form onSubmit={sendMessage}>
        <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="Type here..."/>
        <button id='send1' type='submit'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" color='white' stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
        </svg>
        </button>
      </form>
    </>
  )
}

function ChatMessage(props) {

  const { text, uid, photoURL } = props.message;

  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

  return (
    <div className={`message ${messageClass}`}>
      <img src={photoURL} />
      <p>{text}</p>
    </div>

  )
}
export default App;
