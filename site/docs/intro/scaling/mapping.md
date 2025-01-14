---
title: "Running parallel configurations with Mapping"
sub_link: "scaling/mapping"
meta_title: "Hyperparameter Tuning - Polyaxon quick start tutorial - Core Concepts"
meta_description: "Hyperparameter Tuning - Become familiar with the ecosystem of Polyaxon tools with a top-level overview and useful links to get you started."
visibility: public
status: published
tags:
  - tutorials
  - concepts
  - quick-start
sidebar: "intro"
---

Polyaxon provides a feature for running parallel executions based on a list of configurations called [mapping](/docs/automation/mapping/)

One major difference between mapping and other hyperparameter search options, is that the user is responsible for providing the list of configurations.
The mapping can be used to receive a list of configurations based on an external service that generates suggestions. 

In order to make this tutorial usable for all Polyaxon users, 
we will run several configurations in parallel using the **eager mode**.

In order to run the commands in this section with the **eager mode**, you need to install Polyaxon with `numpy`:

```bash
pip install "polyaxon[numpy]"
```

> To run these commands without the eager mode, and have a fully automated pipeline managing the executions and controlling concurrency limits and early stopping conditions, you need to have access to Polyaxon EE or Polyaxon Cloud.

## Mapping

Sometimes you may want to run parallel executions and provide your own suggestions instead of using an algorithm provided by Polyaxon.
Mapping is how you can provide a predefined space or a list of inputs.

Mapping can be used as well to parallelize a job for fetching data or loading information from a source to a destination concurrently.

The `mapping.yaml` polyaxonfile defines all the values we want to try:

```yaml
version: 1.1
kind: operation
matrix:
  kind: mapping
  values:
  - learning_rate: 0.001
    dropout: 0.25
    conv_activation: relu
    epochs: 5
  - learning_rate: 0.01
    dropout: 0.5
    conv_activation: sigmoid
    epochs: 5
urlRef: https://raw.githubusercontent.com/polyaxon/polyaxon-quick-start/master/experimentation/typed.yaml
```

Running an operation with a mapping is also similar to any other operation:

```bash
polyaxon run --url https://raw.githubusercontent.com/polyaxon/polyaxon-quick-start/master/optimization/mapping.yaml --eager
```

> For more details check the [mapping reference](/docs/automation/mapping/)

## Learn More


For users with Polyaxon EE or Polyaxon Cloud access,
there are also tools to [control caching](/docs/automation/helpers/cache/) of executions with similar configurations,
and [concurrency](/docs/automation/helpers/concurrency/) for enforcing of parallelism.
Finally, every pipeline in Polyaxon can also define [early stopping strategies](/docs/automation/helpers/early-stopping/).
