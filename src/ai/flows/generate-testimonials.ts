
'use server';

/**
 * @fileOverview Gera depoimentos para o Mango Magma, focando em sabor, ardência, ingredientes naturais e qualidade artesanal, com um toque de humor brasileiro.
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
      text: z.string().describe('O texto do depoimento, com um toque de humor brasileiro e linguagem informal.'),
      sentiment: z
        .string()
        .describe('O sentimento expresso no depoimento (ex: maravilhado, viciado, apaixonado, "fogo no parquinho!").'),
      flavorProfile: z
        .string()
        .describe('Descrição da experiência de sabor (ex: tropical, doce e azedinho, "a manga deu um show com a pimenta dando um oi").'),
      heatLevel: z
        .string()
        .describe('Descrição da experiência de ardência (ex: intenso mas gostoso, "deu pra suar a camisa", "quase chamei os bombeiros, mas valeu a pena!").'),
    })
  ),
});
export type GenerateMangoMagmaTestimonialsOutput = z.infer<
  typeof GenerateMangoMagmaTestimonialsOutputSchema
>;

export async function generateMangoMagmaTestimonials(
  input: GenerateMangoMagmaTestimonialsInput
): Promise<GenerateMangoMagmaTestimonialsOutput> {
  // Chamada explícita do modelo aqui para garantir
  return generateMangoMagmaTestimonialsFlow(input);
}

const generateTestimonialsPrompt = ai.definePrompt({
  name: 'generateTestimonialsPrompt',
  input: {schema: GenerateMangoMagmaTestimonialsInputSchema},
  output: {schema: GenerateMangoMagmaTestimonialsOutputSchema},
  prompt: `Você é um mestre do marketing brasileiro, criativo e bem-humorado, e precisa gerar depoimentos autênticos e divertidos para o molho de pimenta Mango Magma da Fireroots.
O Mango Magma é um molho artesanal, 100% natural (polpa de manga, pimenta Scorpion, vinagre, sal marinho, açúcar de cana), sem conservantes ou aditivos. Combina a doçura da manga com o calor "respeitável" da pimenta Scorpion. É conhecido por um início adocicado seguido por uma ardência que cresce e mostra quem manda.

Gere {{numberOfTestimonials}} depoimentos que capturem a experiência do cliente com o Mango Magma. Cada depoimento deve:
1. Refletir um nível de satisfação alto, mas com variações (ex: muito positivo, "me apaixonei", "virou vício", "melhor descoberta do ano").
2. Mencionar o sabor (doçura da manga, contraste com a pimenta, sabor natural/artesanal) de forma criativa.
3. Descrever o nível de picância de forma engraçada e vívida (ex: "deu um calorão bom", "precisei de um copo de leite, mas sem arrependimentos", "fogo na medida certa pra quem tem coragem").
4. Soar autêntico, espontâneo e escrito em português do Brasil bem informal, usando gírias leves e expressões populares (ex: "top demais", "sensacional", "não é pra qualquer um", "show de bola").
5. Sutilmente, se possível, aludir à qualidade natural ou artesanal do produto, tipo "feito com carinho".
6. Ter um toque de humor brasileiro, aquela zoeira sadia.

Formato de saída (JSON Schema):
{
  "type": "object",
  "properties": {
    "testimonials": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "text": { "type": "string", "description": "O texto do depoimento, com um toque de humor brasileiro e linguagem informal." },
          "sentiment": { "type": "string", "description": "O sentimento expresso no depoimento (ex: maravilhado, viciado, apaixonado, 'fogo no parquinho!')." },
          "flavorProfile": { "type": "string", "description": "Descrição da experiência de sabor (ex: tropical, doce e azedinho, 'a manga deu um show com a pimenta dando um oi')." },
          "heatLevel": { "type": "string", "description": "Descrição da experiência de ardência (ex: intenso mas gostoso, 'deu pra suar a camisa', 'quase chamei os bombeiros, mas valeu a pena!')." }
        },
        "required": ["text", "sentiment", "flavorProfile", "heatLevel"]
      }
    }
  },
  "required": ["testimonials"]
}
`,
  config: {
    model: 'gemini-pro', // Especificando o modelo aqui também
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
    // Passando explicitamente o modelo na chamada da prompt
    const {output} = await generateTestimonialsPrompt(input, { model: 'gemini-pro' });
    return output!;
  }
);
