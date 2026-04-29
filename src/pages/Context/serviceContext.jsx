import { createContext, useState, useEffect } from "react";

export const ServiceContext = createContext();

export function ServiceProvider({ children }) {
  const [prestadores, setPrestadores] = useState([]);
  const [trigger, setTrigger] = useState(0);

  const fakeData = [
  {
    id: 1,
    usuarioId: 0, // 0 = prestador fictício
    nomeProfissional: "João Silva",
    email: "joao@gmail.com",
    area: "Eletricista",
    descricao: "Instalações elétricas em geral",
    preco: "120.00",
    img: "https://i.pravatar.cc/150?img=11",
    category: "Reforma",
    verified: true,
    urgent: true,
    calendar: true,
    cpf: "",
    dadosAgenda: {
      tipo: "contato",
      link: ""
    },
    extraInfo: {
      Serviços: "2 opções disponíveis",
      Disponibilidade: "Disponível com agenda"
    },
    listaServicos: [
      { id: 101, nome: "Instalação simples", preco: "A partir R$120.00" },
      { id: 102, nome: "Reparo elétrico", preco: "A partir R$180.00" }
    ]
  },

  {
    id: 2,
    usuarioId: 0,
    nomeProfissional: "Maria Santos",
    email: "maria@gmail.com",
    area: "Diarista",
    descricao: "Limpeza residencial e comercial",
    preco: "150.00",
    img: "https://i.pravatar.cc/150?img=5",
    category: "Limpeza",
    verified: true,
    urgent: false,
    calendar: true,
    cpf: "",
    dadosAgenda: {
      tipo: "contato",
      link: ""
    },
    extraInfo: {
      Serviços: "3 opções disponíveis",
      Disponibilidade: "Atende Imediato"
    },
    listaServicos: [
      { id: 201, nome: "Limpeza básica", preco: "A partir R$150.00" },
      { id: 202, nome: "Limpeza pesada", preco: "A partir R$250.00" },
      { id: 203, nome: "Limpeza pós-obra", preco: "A partir R$350.00" }
    ]
  },

  {
  id: 4,
  usuarioId: 0,
  nomeProfissional: "Ana Paula",
  email: "ana@gmail.com",
  area: "Cabeleireira",
  descricao: "Cortes, escova e coloração",
  preco: "90.00",
  img: "https://i.pravatar.cc/150?img=20",
  category: "Beleza",
  verified: true,
  urgent: false,
  calendar: true,
  cpf: "",
  dadosAgenda: {
    tipo: "contato",
    link: ""
  },
  extraInfo: {
    Serviços: "2 opções disponíveis",
    Disponibilidade: "Agenda disponível"
  },
  listaServicos: [
    { id: 401, nome: "Corte feminino", preco: "A partir R$50.00" },
    { id: 402, nome: "Escova", preco: "A partir R$40.00" }
  ]
},

  {
    id: 3,
    usuarioId: 0,
    nomeProfissional: "Carlos Andrade",
    email: "carlos@gmail.com",
    area: "Técnico de TI",
    descricao: "Conserto de computadores e suporte técnico",
    preco: "180.00",
    img: "https://i.pravatar.cc/150?img=3",
    category: "Tecnologia",
    verified: true,
    urgent: true,
    calendar: true,
    cpf: "",
    dadosAgenda: {
      tipo: "contato",
      link: ""
    },
    extraInfo: {
      Serviços: "3 opções disponíveis",
      Disponibilidade: "Atende Imediato"
    },
    listaServicos: [
      { id: 301, nome: "Formatação", preco: "A partir R$120.00" },
      { id: 302, nome: "Limpeza interna", preco: "A partir R$150.00" },
      { id: 303, nome: "Troca de peças", preco: "A partir R$180.00" }
    ]
  },

  {
  id: 9,
  usuarioId: 0,
  nomeProfissional: "Lucas Mendes",
  email: "lucas@gmail.com",
  area: "Pedreiro",
  descricao: "Construção, reforma e acabamento em geral",
  preco: "200.00",
  img: "https://i.pravatar.cc/150?img=15",
  category: "Reforma",
  verified: true,
  urgent: true,
  calendar: false,
  cpf: "",
  dadosAgenda: {
    tipo: "contato",
    link: ""
  },
  extraInfo: {
    Serviços: "3 opções disponíveis",
    Disponibilidade: "Atende Imediato"
  },
  listaServicos: [
    { id: 401, nome: "Reforma básica", preco: "A partir R$200.00" },
    { id: 402, nome: "Construção de muro", preco: "A partir R$350.00" },
    { id: 403, nome: "Acabamento", preco: "A partir R$180.00" }
  ]
},

{
  id: 5,
  usuarioId: 0,
  nomeProfissional: "Juliana Rocha",
  email: "juliana@gmail.com",
  area: "Manicure",
  descricao: "Unhas decoradas, gel e esmaltação simples",
  preco: "50.00",
  img: "https://i.pravatar.cc/150?img=25",
  category: "Beleza",
  verified: true,
  urgent: false,
  calendar: true,
  cpf: "",
  dadosAgenda: {
    tipo: "contato",
    link: ""
  },
  extraInfo: {
    Serviços: "3 opções disponíveis",
    Disponibilidade: "Agenda disponível"
  },
  listaServicos: [
    { id: 501, nome: "Esmaltação simples", preco: "A partir R$30.00" },
    { id: 502, nome: "Unha em gel", preco: "A partir R$80.00" },
    { id: 503, nome: "Decoração", preco: "A partir R$50.00" }
  ]
}

  
];

 useEffect(() => {
    loadPrestadores();
  }, [trigger]); 
  
  const loadPrestadores = () => {
    const localPrestadores = JSON.parse(localStorage.getItem("prestadores")) || [];
    const listaCompleta = [...fakeData, ...localPrestadores];
    const listaUnica = listaCompleta.filter((item, index, self) =>
      index === self.findIndex((t) => t.id === item.id)
    );
    setPrestadores(listaUnica);
  };

 const adicionarPrestador = (novoPrestador) => {
    const localPrestadores = JSON.parse(localStorage.getItem("prestadores")) || [];
    const atualizadoLocal = [...localPrestadores, novoPrestador];
    localStorage.setItem("prestadores", JSON.stringify(atualizadoLocal));
    setTrigger(prev => prev + 1); // Força recarregamento
  };

 const atualizarPrestador = (prestadorAtualizado) => {
    const localPrestadores = JSON.parse(localStorage.getItem("prestadores")) || [];
    
    // Encontra e atualiza o prestador
    const atualizadoLocal = localPrestadores.map(p => 
      p.id === prestadorAtualizado.id ? { ...p, ...prestadorAtualizado } : p
    );
    
    localStorage.setItem("prestadores", JSON.stringify(atualizadoLocal));
    setTrigger(prev => prev + 1); // Força recarregamento
  };
  return (
     <ServiceContext.Provider value={{ 
      prestadores, 
      adicionarPrestador, 
      atualizarPrestador, // Exporta a nova função
      loadPrestadores // Exporta também para recarregamento manual
    }}>
      {children}
    </ServiceContext.Provider>
  );
}