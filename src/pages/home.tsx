// src/pages/HomePage.tsx
import Section from "@/components/Sections";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Home: React.FC = () => {
  return (
    <div>
      <div className="w-full flex flex-col content-center h-56 justify-center flex-wrap text-center bg-cyan-200">
        <h1 className="text-3xl mb-4">
          Seu Guia Completo sobre Doenças Transmitidas pelo Aedes Aegypti
        </h1>
        <h3 className="text-lg">
          Monitore e Previne-se Contra Dengue, Zika, Chikungunya e Febre Amarela
          Urbana
        </h3>
      </div>
    <div className="w-full flex flex-wrap justify-center content-center gap-4">
      <Card className="w-full sm:w-5/12 md:w-5/12 border-l border-r">
        <CardHeader>
        <CardTitle>Doenças Transmitidas pelo Aedes aegypti</CardTitle>
        </CardHeader>
        <CardContent>
        <CardDescription>
          Descubra as principais doenças causadas pelo mosquito Aedes
          aegypti e como preveni-las.
        </CardDescription>
        </CardContent>
      </Card>
      <Card className="w-full sm:w-5/12 md:w-5/12 border-l border-r">
        <CardHeader>
        <CardTitle>Sintomas e Sinais de Alerta</CardTitle>
        </CardHeader>
        <CardContent>
        <CardDescription>
          Identifique os sintomas das doenças transmitidas pelo Aedes
          aegypti.
        </CardDescription>
        </CardContent>
      </Card>
      <Card className="w-full sm:w-5/12 md:w-5/12 border-l border-r">
        <CardHeader>
        <CardTitle>Acompanhamento de Casos e Surtos</CardTitle>
        </CardHeader>
        <CardContent>
        <CardDescription>
          Acompanhe a disseminação do mosquito e os surtos de doenças em sua
          região.
        </CardDescription>
        </CardContent>
      </Card>
      <Card className="w-full sm:w-5/12 md:w-5/12 border-l border-r">
        <CardHeader>
        <CardTitle>Postos de Saúde Próximos a Você</CardTitle>
        </CardHeader>
        <CardContent>
        <CardDescription>
          Saiba onde encontrar suporte específico para dengue e outras
          doenças.
        </CardDescription>
        </CardContent>
      </Card>
    </div>
      <Section children={"texto"} />
    </div>
  );
};

export default Home;
