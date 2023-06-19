# Signal Tower Energy Prediction

## Introduction

This project focuses on predicting the energy consumption of signal towers for a specific service provider's sites. The goal is to develop accurate models that can forecast the energy usage for the upcoming months. By analyzing various features such as call data usage, internet usage, unique options, specific equipment's data, and more, we aim to optimize energy management and resource allocation for signal towers.

## Methodology

The project utilizes a combination of autoML techniques and deep learning algorithms to design and train prediction models. These methods enable us to automate the model selection and hyperparameter tuning process, ensuring optimal performance. The key steps involved in the methodology are as follows:

1. Data Preprocessing: The raw dataset is cleaned, transformed, and prepared for modeling. This involves handling missing values, encoding categorical variables, and normalizing numerical features.

2. Feature Analysis: Advanced feature analysis techniques are applied to identify the most relevant features for predicting energy consumption. This includes assessing feature importance, correlation analysis, and dimensionality reduction.

3. Model Selection: The autoML techniques are employed to evaluate various algorithms and select the best-performing model. This allows us to leverage the strengths of different algorithms and find the most suitable approach for our prediction task.

4. Model Training: The selected model architecture, such as artificial neural networks (ANNs), is trained on the preprocessed dataset. The model learns the patterns and relationships between the input features and the target variable (energy consumption).

5. Model Evaluation: The trained model is evaluated using appropriate evaluation metrics, such as mean squared error (MSE), root mean squared error (RMSE), mean absolute error (MAE), or coefficient of determination (R-squared). These metrics provide insights into the accuracy and performance of the model.

6. Prediction and Deployment: The trained model is utilized to make energy consumption predictions for new data points. The model can be deployed in a production environment to support real-time energy management and decision-making.

## Features

The following features are used in the signal tower energy prediction:

- `Site_Id`: Identifier for the signal tower site.
- `Time_Key`: Timestamp for the data point.
- `dltrafficvolume(gb)(gb)`: Downlink traffic volume in gigabytes.
- `ultrafficvolume(gb)(gb)`: Uplink traffic volume in gigabytes.
- `Router_Count`: Count of routers at the site.
- `Links_Count`: Count of links at the site.
- `High_Pwr_RRU_Count`: Count of high-power Remote Radio Units (RRUs) at the site.
- `Medium_Pwr_RRU_Count`: Count of medium-power RRUs at the site.
- `Low_Pwr_RRU_Count`: Count of low-power RRUs at the site.
- `Cabin_Type`: Type of cabin or enclosure used at the site.
- `District`: District where the site is located.
- `Region`: Region where the site is located.
- `Site_Type`: Classification of the site based on its purpose or characteristics.
- `day_of_week`: Day of the week for the timestamp.
- `hour`: Hour of the timestamp.
- `dl2gtraffic`: Traffic volume specific to 2G network technology (downlink).
- `ul2gtraffic`: Traffic volume specific to 2G network technology (uplink).

## Dependencies

The project relies on the following libraries and frameworks:

- `numpy`: Library for numerical computations in Python.
- `pandas`: Data analysis and manipulation library.
- `python`: Programming language used for development.
- `keras`: Deep learning framework for building and training neural networks.
- `scikit-learn`: Machine
