
'use server';

/**
 * @fileOverview Gera depoimentos para o Mango Magma, focando em sabor, ardência, ingredientes naturais e qualidade artesanal, com um toque de humor brasileiro autêntico e espontâneo.
 *
 * - generateMangoMagmaTestimonials - Função que gera depoimentos para o Mango Magma.
 * - GenerateMangoMagmaTestimonialsInput - Tipo de entrada para a função.
 * - GenerateMangoMagmaTestimonialsOutput - Tipo de retorno para a função.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateMangoMagmaTestimonialsInputSchema = z.object({
  numberOfTestimonials: z
    .number()
    .default(3)
    .describe('O número de depoimentos para gerar.'),
});
export type GenerateMangoMagmaTestimonialsInput = z.infer<
  typeof GenerateMangoMagmaTestimonialsInputSchema
>;

const GenerateMangoMagmaTestimonialsOutputSchema = z.object({
  testimonials: z.array(
    z.object({
      text: z.string().describe('O texto do depoimento, como se fosse escrito por um cliente brasileiro de forma natural, entusiasmada e divertida (ex: "esse molho é sensacional!", "virou meu queridinho", "sabor incrível"). Evite linguagem excessivamente formal ou corporativa, mas também evite gírias muito pesadas ou humor ofensivo.'),
      sentiment: z
        .string()
        .describe('O sentimento expresso no depoimento de forma positiva e brasileira (ex: "adorei", "recomendo muito", "experiência top", "inacreditável", "apaixonante").'),
      flavorProfile: z
        .string()
        .describe('Descrição da experiência de sabor de forma criativa e convidativa (ex: "a manga traz uma doçura equilibrada que combina demais com a pimenta", "um toque adocicado e cítrico que surpreende", "sabor marcante que explode na boca").'),
      heatLevel: z
        .string()
        .describe('Descrição da experiência de ardência de forma vívida, mas sem exageros negativos (ex: "uma picância na medida certa que te esquenta", "pra quem gosta de um calorzinho a mais", "um fogo que respeita o sabor", "nível de ardência delicioso").'),
    })
  ),
});
export type GenerateMangoMagmaTestimonialsOutput = z.infer<
  typeof GenerateMangoMagmaTestimonialsOutputSchema
>;

export async function generateMangoMagmaTestimonials(
  input: GenerateMangoMagmaTestimonialsInput
): Promise<GenerateMangoMagmaTestimonialsOutput> {
  return generateMangoMagmaTestimonialsFlow(input);
}

const generateTestimonialsPrompt = ai.definePrompt({
  name: 'generateTestimonialsPrompt',
  input: {schema: GenerateMangoMagmaTestimonialsInputSchema},
  output: {schema: GenerateMangoMagmaTestimonialsOutputSchema},
  prompt: `Você é um criador de conteúdo brasileiro, especialista em criar reviews e depoimentos autênticos, entusiasmados e que soam 100% reais para o molho de pimenta Mango Magma da Fireroots.
O Mango Magma é artesanal, 100% natural (polpa de manga, pimenta Scorpion, vinagre, sal marinho, açúcar de cana), sem conservantes. Combina a doçura da manga com o calor intenso da pimenta Scorpion. É conhecido por um início adocicado seguido por uma ardência que cresce.

Gere {{numberOfTestimonials}} depoimentos que capturem a experiência de um cliente real com o Mango Magma. Cada depoimento deve:
1. Soar como se fosse escrito por um brasileiro comum, de forma espontânea, informal, divertida e positiva. Use expressões populares (ex: "top demais", "curti muito", "sensacional", "que parada é essa?!", "brabo demais"). Evite linguagem muito formal ou gírias excessivamente pesadas, mas pode ter um toque de humor leve.
2. Mencionar o sabor (doçura da manga, contraste com a pimenta, sabor natural/artesanal) de forma criativa e original, evitando clichês.
3. Descrever o nível de picância de forma vívida e honesta, mas divertida (ex: "esquenta bem, mas é delicioso", "uma ardência que dá pra sentir, pra quem não tem medo de suar um pouquinho", "um foguinho que respeita o sabor, mas não alivia").
4. Sutilmente, se possível, aludir à qualidade natural ou artesanal (ex: "dá pra ver que é feito com carinho", "ingredientes de primeira").
5. Ter um tom de entusiasmo genuíno.
6. Ser variado, cada depoimento com uma perspectiva e "personagem" diferente.

Formato de saída (JSON Schema):
{
  "type": "object",
  "properties": {
    "testimonials": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "text": { "type": "string", "description": "O texto do depoimento, como se fosse escrito por um cliente brasileiro de forma natural, entusiasmada e divertida (ex: 'esse molho é sensacional!', 'virou meu queridinho', 'sabor incrível'). Evite linguagem excessivamente formal ou corporativa, mas também evite gírias muito pesadas ou humor ofensivo." },
          "sentiment": { "type": "string", "description": "O sentimento expresso no depoimento de forma positiva e brasileira (ex: 'adorei', 'recomendo muito', 'experiência top', 'inacreditável', 'apaixonante', 'brutal')." },
          "flavorProfile": { "type": "string", "description": "Descrição da experiência de sabor de forma criativa e convidativa (ex: 'a manga traz uma doçura equilibrada que combina demais com a pimenta', 'um toque adocicado e cítrico que surpreende', 'sabor marcante que explode na boca')." },
          "heatLevel": { "type": "string", "description": "Descrição da experiência de ardência de forma vívida, mas sem exageros negativos (ex: 'uma picância na medida certa que te esquenta', 'pra quem gosta de um calorzinho a mais', 'um fogo que respeita o sabor', 'nível de ardência delicioso e desafiador')." }
        },
        "required": ["text", "sentiment", "flavorProfile", "heatLevel"]
      }
    }
  },
  "required": ["testimonials"]
}
`,
  config: {
    model: 'gemini-1.5-flash-latest', // Alterado de 'gemini-pro'
    safetySettings: [
      { category: 'HARM_CATEGORY_HARASSMENT', threshold: 'BLOCK_NONE' },
      { category: 'HARM_CATEGORY_HATE_SPEECH', threshold: 'BLOCK_ONLY_HIGH' },
      { category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
      { category: 'HARM_CATEGORY_DANGEROUS_CONTENT', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
    ],
  },
});

const generateMangoMagmaTestimonialsFlow = ai.defineFlow(
  {
    name: 'generateMangoMagmaTestimonialsFlow',
    inputSchema: GenerateMangoMagmaTestimonialsInputSchema,
    outputSchema: GenerateMangoMagmaTestimonialsOutputSchema,
  },
  async input => {
    const {output} = await generateTestimonialsPrompt(input, { model: 'gemini-1.5-flash-latest' }); // Alterado de 'gemini-pro'
    return output!;
  }
);

