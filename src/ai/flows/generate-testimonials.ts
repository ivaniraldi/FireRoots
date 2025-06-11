
'use server';

/**
 * @fileOverview Generates testimonials for Mango Magma, focusing on flavor, heat, natural ingredients, and artisanal quality.
 *
 * - generateMangoMagmaTestimonials - A function that generates testimonials for Mango Magma.
 * - GenerateMangoMagmaTestimonialsInput - The input type for the generateMangoMagmaTestimonials function.
 * - GenerateMangoMagmaTestimonialsOutput - The return type for the generateMangoMagmaTestimonials function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateMangoMagmaTestimonialsInputSchema = z.object({
  numberOfTestimonials: z
    .number()
    .default(3)
    .describe('The number of testimonials to generate.'),
});
export type GenerateMangoMagmaTestimonialsInput = z.infer<
  typeof GenerateMangoMagmaTestimonialsInputSchema
>;

const GenerateMangoMagmaTestimonialsOutputSchema = z.object({
  testimonials: z.array(
    z.object({
      text: z.string().describe('The text of the testimonial.'),
      sentiment: z
        .string()
        .describe('The sentiment expressed in the testimonial (e.g., positive, very positive, extasiado).'),
      flavorProfile: z
        .string()
        .describe('Description of the flavor experience (e.g., tropical, sweet, tangy, a doçura da manga com o poder da Scorpion).'),
      heatLevel: z
        .string()
        .describe('Description of the heat level experience (e.g., mild, intense, fiery, uma onda de calor progressiva e duradoura).'),
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
  prompt: `Você é um especialista em marketing e precisa gerar depoimentos autênticos e variados para o molho de pimenta Mango Magma da Fireroots.
O Mango Magma é um molho artesanal, 100% natural (polpa de manga, pimenta Scorpion, sal marinho, açúcar de cana), sem conservantes ou aditivos. Combina a doçura da manga com o calor extremo da pimenta Scorpion. É conhecido por um início adocicado seguido por uma ardência progressiva e duradoura.

Gere {{numberOfTestimonials}} depoimentos que capturem a experiência do cliente com o Mango Magma. Cada depoimento deve:
1. Refletir um nível de satisfação diferente (ex: positivo, muito positivo, extasiado, completamente viciado).
2. Mencionar o sabor (doçura da manga, contraste com a pimenta, sabor natural/artesanal).
3. Descrever o nível de picância (intenso, poderoso, uma explosão, calor que cresce).
4. Soar autêntico e escrito em português do Brasil.
5. Sutilmente, se possível, aludir à qualidade natural ou artesanal do produto.

Formato de saída:
{
  "testimonials": [
    {
      "text": "[Texto do depoimento]",
      "sentiment": "[Sentimento expresso no depoimento]",
      "flavorProfile": "[Descrição do sabor percebido pelo cliente]",
      "heatLevel": "[Descrição do nível de picância percebido pelo cliente]"
    },
    ...
  ]
}`,
  config: {
    safetySettings: [
      {
        category: 'HARM_CATEGORY_HARASSMENT',
        threshold: 'BLOCK_NONE', // Allow more expressive language about intensity
      },
      {
        category: 'HARM_CATEGORY_HATE_SPEECH',
        threshold: 'BLOCK_ONLY_HIGH',
      },
      {
        category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT',
        threshold: 'BLOCK_MEDIUM_AND_ABOVE',
      },
      {
        category: 'HARM_CATEGORY_DANGEROUS_CONTENT',
        threshold: 'BLOCK_MEDIUM_AND_ABOVE', // Allow descriptions of "extreme heat" etc.
      },
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
    const {output} = await generateTestimonialsPrompt(input);
    return output!;
  }
);
