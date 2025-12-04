import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LuChevronLeft, LuMail, LuLock, LuCircleCheck, LuArrowRight } from "react-icons/lu";
import "../../styles/global.css";
import "../../styles/Senha.css";

export default function EsqueciSenha() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("initial"); // 'initial' | 'success'

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;

    // Simula o envio
    // Aqui você faria a chamada para sua API (ex: firebase.resetPassword(email))
    setStatus("success");
  };

  return (
    <div className="esqueci-page">
      
      {/* HEADER SIMPLES */}
      <header className="page-header-simple">
        <button onClick={() => navigate("/login")} className="back-btn-simple">
          <LuChevronLeft size={28} />
        </button>
        <h2>Recuperar Conta</h2>
      </header>

      {/* CARD PRINCIPAL */}
      <div className="auth-card animate-fade">
        
        {/* CONTEÚDO: Muda dependendo do status */}
        {status === 'initial' ? (
          <>
            <div className="icon-header">
              <div className="icon-circle">
                <LuLock size={32} color="#1A8BF0" />
              </div>
              <h3>Esqueceu a senha?</h3>
              <p>Não se preocupe! Digite seu e-mail cadastrado e enviaremos instruções para você redefinir sua senha.</p>
            </div>

            <form onSubmit={handleSubmit} className="auth-form">
              <div className="input-group">
                <label className="input-label">E-mail cadastrado</label>
                <div className="input-wrapper">
                  <LuMail className="input-icon" size={20} />
                  <input 
                    type="email" 
                    placeholder="exemplo@email.com"
                    className="custom-input-icon"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              <button type="submit" className="btn-primary-block">
                Enviar Link de Recuperação
              </button>
            </form>
          </>
        ) : (
          /* TELA DE SUCESSO */
          <div className="success-content animate-fade">
            <div className="icon-circle success-circle">
              <LuCircleCheck size={40} color="#28a745" />
            </div>
            <h3>Verifique seu e-mail</h3>
            <p>
              Enviamos um link de recuperação para <strong>{email}</strong>. 
              <br/>
              Verifique sua caixa de entrada (e spam) e siga as instruções.
            </p>
            
            <button 
              className="btn-outline-block" 
              onClick={() => navigate('/login')}
            >
              Voltar para o Login <LuArrowRight size={18} />
            </button>
            
            <button 
              className="btn-text-only" 
              onClick={() => setStatus('initial')}
            >
              Não recebeu? Tentar novamente
            </button>
          </div>
        )}

      </div>
    </div>
  );
}