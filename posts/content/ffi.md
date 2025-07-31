# Fast Fourier Transform

## Outine
The post should probably, roughly go like this.
- A real life example
- Foundations
  - waves, signals etc
- Mathematics
- Algorithm
  - Naive DFT
  - FFT
  - Viz
- More real life applications

## Interactive Elements
- Frequency spectrum visualizers
- Waveform builders and decomposers
- Real-time audio/image processing tools
- Algorithm step-through animations


## Content
### Multiplication of large numbers
- but what about very large numbers with numbers of digits about 1000s or millions
Have you considered large numbers with more than thousands and millions of digits are multiplied by computers?
> No.
Well you are in luc- Oh, you said no.

...

This is awkward. So, How's life treating you?
> Just go back to telling me about multiplications of very large numbers. This is somehow even more painful.

So you see unlike "regular" sized numbers that can represented using a single memory word of a computer, these numbers with thousands of digits need some special way to represent them before we can begin to think about how to do any operations with them.
A number can be expressed as a polynomial equation. For example the number 15159 can be expressed as
$P(X) = X^4 + 5X^3 + X^2 + 5X + 9 |_{X=10}$

To represent this number, we can store the coefficients of each term in an array:
P = [9, 5, 1, 5, 1]
We store in reverse order so that the digit corresponding nth power of X in the equation is store in the array at nth index. This is called the coefficient representation. (TODO is it?)

Given two numbers A and B represented as above, the multiplication can proceed as follows:
- Initialize an zero array C with size $d_1 + d_2$, where $d_1, d_2$ are the number of digits of A and B respectively.
- for i = 0 to $d_1$:
-     for j = 0 to $d_2$:
-         prod = C[i+j] + A[i] * B[j]
-         C[i + j] = prod % 10
-         C[i+j+1] += prod / 10 // integer division

Can you see the problem with this approach?

> We are running one loop inside another and basically end up doing $d_1 * d_2$ multiplications. So if we have two numbers with even thousands of digits, we would be doing millions of multiplications.

...

And Can you tell me how we can use FFT to solve this problem?
> No.

Yea. Thats what I thought.

The coefficient representation doesn't seem to work. We need a different kind of representation.

A degree 1 polynomial represents a straight line and we know that any straight like can be uniquely identified by using two points.
<TODO: Visualization here>
Similarly any polynomial of degree 2 can be uniquely identified by three points.

This generalizes such that any polynomial of degree d can be uniquely identified by d+1 points.
> Does it actually generalize?

You can see the proof in Appendix.

- when are we ever gonna need to mutiply numbers having thousands of digits
- so fft multiplies numbers with large number of digits very fast compared to conventional method

- fft is called the most importand and beautiful algorithm. i don't really get it.

### Applications
so what are some other applications of fft

okay so it may be important but beautiful?

### Foundations
what is a signal. what about wave.
whats time domain and frequency domain
why do we need frequency domain

### Mathematics
conversion from time domain to frequency domain
DTFT
but why doesn't it work
okay so DFT it is
but wait its O(n^2)

### Algorithm
FFT

now i get it.

### Appendix
- https://math.stackexchange.com/questions/144257/how-is-a-degree-d-polynomial-uniquely-characterized-by-its-values-at-d1-dis
