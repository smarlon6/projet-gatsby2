import React from 'react'
import Layout from '../components/Layout'


export default function Contact(){
  return (
    <Layout>
        <main className='page'>
            <section className='contact-page'>
            <article className='contact-info'>
                <h3>Quer entrar em contato?</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet magna ut ultrices ultrices. </p>
                <p>Ut in ligula euismod, finibus lorem ut, auctor felis. </p>
                <p>Proin a est in dui egestas mattis eu vulputate elit. Cras quis magna ligula. Suspendisse mattis dui nec aliquam consequat. Donec sit amet orci ut est pharetra tincidunt.</p>
                </article>
            <article>
                <form className='form contact-form'>
                    <div className='form-row'>
                        <label htmlFor='name'>Seu nome</label>
                        <input type='text' name="name" id="name"/>
                    </div>
                    <div className='form-row'>
                        <label htmlFor='email'>Seu e-mail</label>
                        <input type='text' name="email" id="email"/>
                    </div>
                    <div className='form-row'>
                        <label htmlFor='message'>Mensagem</label>
                        <textarea name='message' id='message'></textarea>
                    </div>
                    <button type='submit' className='btn block'>Enviar</button>
                </form>
            </article>
            </section>
        </main>
    </Layout>
  )
}