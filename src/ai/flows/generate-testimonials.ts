'use server';

/**
 * @fileOverview Generates testimonials for Mango Magma, focusing on flavor and heat levels.
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
        .describe('The sentiment expressed in the testimonial (e.g., positive, very positive).'),
      flavorProfile: z
        .string()
        .describe('Description of the flavor experience (e.g., tropical, sweet, tangy).'),
      heatLevel: z
        .string()
        .describe('Description of the heat level experience (e.g., mild, intense, fiery).'),
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
  prompt: `Você é um especialista em marketing e precisa gerar depoimentos autênticos e variados para o molho de pimenta Mango Magma da Fireroots, destacando diferentes níveis de satisfação, o sabor tropical e a intensidade da pimenta.

Gere {{numberOfTestimonials}} depoimentos que capturem a experiência do cliente com o Mango Magma. Cada depoimento deve refletir um nível de satisfação diferente (por exemplo, positivo, muito positivo, extasiado), e deve mencionar tanto o sabor quanto o nível de picância do molho. Os depoimentos devem parecer reais e devem ser escritos em português do Brasil.

Formato de saída:
{
  "testimonials": [
    {
      "text": "[Texto do depoimento]",
      "sentiment": "[Sentimento expresso no depoimento]",
      "flavorProfile": "[Descrição do sabor]",
      "heatLevel": "[Descrição do nível de picância]"
    },
    ...
  ]
}`,
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
