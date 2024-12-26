---
post_number: 1
layout: post
categories: tutorial
title:  "Building a deep neural network using python form scratch"
subtitle: "A comprehensive guide to building a deep neural network using python."
description: "Building a deep neural network using python form scratch"
thumbnail: "/assets/img/passport.jpg"
permalink: /posts/:title:output_ext
---

Neural networks were first proposed in 1944 by Warren McCullough and Walter Pitts, two University of Chicago researchers who moved to MIT in 1952 ([Eric Roberts, 2000][eric2000]). Neural nets are a means of doing machine learning, in which a computer learns to perform some task by analyzing training examples. Usually, the examples have been hand-labeled in advance ([Larry Hardesty, 2019][larry2019]). In todays era, almost every sector has significantly intregrated with AI (formally Neural Networks). Some of the key usage of NN are: classification, prediction, clastaring, association, etc. In this post, a step by step illustration of building a Neural Network using python is shown. 

## Architechture

lorem

## Supporting Functions

Instead of iterating over a simple for loop, we are going to use `numpy` arrays in order to speed-up the compation process. Using `numpy` over traditional for loop iteration have several benifites. One of key reason of using `numpy` arrays is, it enable data parallelism by `SIMD` (Single Instruction Multiple Data) architechture ([Krste Asanović et al.][krste]). Also, `numpy` is build in `Cython`, which is a C-language intregration of standard Python, which ensures faster compilation than standard Python libraries (i.e. `PyPi`). The libraries are imported as followes:

```py
# IMPORT
import numpy as np
import matplotlib.pyplot as plt
```

![](/assets/img/passport.jpg)

#### Activation Functions

Activation functions are used to stimulate a partilar node in a neural network. There are various activation functins avilable, with their own specilization. Among which `reLU` and `sigmoid` activation functions are the most common. Both sigmoid and reLU are liner activation functions. Sigmoid function scale the input in between value $$[0,1]$$ where `reLU` scale the input between $$[0,n]$$ where $$n$$ is possitive number.  The fourmula to calculate sigmoid activation function is $$f(Z)=\Large \frac{1}{(1+e^{-Z})}$$ where as the `reLU` activation function can calculate d using simple `max` function. 

```py
# SIGMOID
def sigmoid(Z):
    return 1/(1+np.exp(-Z))
```
```py
# RELU
def relu(Z):
    return np.maximum(0,Z)
```

|||
|-|-|
|![](/assets/posts/1/sigmoid_plot.png) _sigmoid_|![](/assets/posts/1/relu_plot.png) _reLU_|

## Forward Propagation

```py
def forward_propagation(input_shape, parameters):
    W1 = parameters["W1"]
    W2 = parameters["W2"]
    b1 = parameters["b1"]
    b2 = parameters["b2"]
    Z1 = np.dot(W1, input_shape) + b1
    A1 = relu(Z1)
    Z2 = np.dot(W2, A1) + b2
    A2 = sigmoid(Z2)
    cache = {
        "Z1": Z1,
        "A1": A1,
        "Z2": Z2,
        "A2": A2}
    return A2, cache
```

## Additional Resources

- Deep Learning Specialization by Andrew Ng [[deeplearning.ai][deeplearningai]]
- Deep Learning by Mitech M Kapra [[CS6910][mitesh]]

<!-- references -->

[eric2000]: https://cs.stanford.edu/people/eroberts/courses/soco/projects/neural-networks/History/history1.html
[larry2019]: https://news.mit.edu/2017/explained-neural-networks-deep-learning-0414
[krste]: http://wla.berkeley.edu/~cs61c/fa17/lec/18/L18%20SIMD%20(1up).pdf
[deeplearningai]: asdf
[mitesh]: http://www.cse.iitm.ac.in/~miteshk/CS6910.html
