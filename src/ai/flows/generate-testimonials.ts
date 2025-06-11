
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
      text: z.string().describe('O texto do depoimento, como se fosse escrito por um brasileiro raiz, usando gírias e expressões populares de forma natural e engraçada (ex: "bagulho é doido", "pegou fogo no parquinho", "brabo demais"). Evite linguagem formal ou corporativa.'),
      sentiment: z
        .string()
        .describe('O sentimento expresso no depoimento de forma bem brasileira (ex: "apaixonado", "virei fã", "brincadeira ficou séria", "sensacional", "coisa de maluco").'),
      flavorProfile: z
        .string()
        .describe('Descrição da experiência de sabor de forma criativa e coloquial (ex: "a manga dá um show e a pimenta chega junto", "doce com azedinho que te pega", "sabor que explode na boca").'),
      heatLevel: z
        .string()
        .describe('Descrição da experiência de ardência de forma vívida e engraçada (ex: "quase chamei o bombeiro, mas valeu", "deu pra suar a camisa", "fogo que respeita mas não alivia", "quentura nível hard").'),
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
  prompt: `Você é um criador de conteúdo brasileiro, mestre em criar reviews e depoimentos autênticos, engraçados e que soam 100% reais para o molho de pimenta Mango Magma da Fireroots.
O Mango Magma é artesanal, 100% natural (polpa de manga, pimenta Scorpion, vinagre, sal marinho, açúcar de cana), sem conservantes. Combina a doçura da manga com o calor "nervoso" da pimenta Scorpion. É conhecido por um início adocicado seguido por uma ardência que cresce e mostra quem manda.

Gere {{numberOfTestimonials}} depoimentos que capturem a experiência de um cliente real com o Mango Magma. Cada depoimento deve:
1. Soar como se fosse escrito por um brasileiro comum, jovem ou adulto, de forma espontânea e bem informal. Use gírias ("parada", "bagulho", "trampo", "dahora", "brabo"), abreviações ("vc", "pq", "tá") e expressões populares ("fogo no parquinho", "lá ele", "não é brinquedo não", "coisa de louco").
2. Mencionar o sabor (doçura da manga, contraste com a pimenta, sabor natural/artesanal) de forma criativa e original, evitando clichês.
3. Descrever o nível de picância de forma engraçada, vívida e talvez um pouco exagerada (ex: "precisei de um extintor do lado", "meu paladar pediu arrego, mas depois agradeceu", "quase vi Jesus").
4. Sutilmente, se possível, aludir à qualidade natural ou artesanal (ex: "feito com carinho", "sem frescura química").
5. Ter um toque de humor brasileiro genuíno, aquela zoeira leve ou um comentário espirituoso.
6. Ser variado, cada depoimento com uma pegada e um "personagem" diferente.

Formato de saída (JSON Schema):
{
  "type": "object",
  "properties": {
    "testimonials": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "text": { "type": "string", "description": "O texto do depoimento, como se fosse escrito por um brasileiro raiz, usando gírias e expressões populares de forma natural e engraçada (ex: 'bagulho é doido', 'pegou fogo no parquinho', 'brabo demais'). Evite linguagem formal ou corporativa." },
          "sentiment": { "type": "string", "description": "O sentimento expresso no depoimento de forma bem brasileira (ex: 'apaixonado', 'virei fã', 'brincadeira ficou séria', 'sensacional', 'coisa de maluco')." },
          "flavorProfile": { "type": "string", "description": "Descrição da experiência de sabor de forma criativa e coloquial (ex: 'a manga dá um show e a pimenta chega junto', 'doce com azedinho que te pega', 'sabor que explode na boca')." },
          "heatLevel": { "type": "string", "description": "Descrição da experiência de ardência de forma vívida e engraçada (ex: 'quase chamei o bombeiro, mas valeu', 'deu pra suar a camisa', 'fogo que respeita mas não alivia', 'quentura nível hard')." }
        },
        "required": ["text", "sentiment", "flavorProfile", "heatLevel"]
      }
    }
  },
  "required": ["testimonials"]
}
`,
  config: {
    model: 'gemini-pro',
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
    const {output} = await generateTestimonialsPrompt(input, { model: 'gemini-pro' });
    return output!;
  }
);
