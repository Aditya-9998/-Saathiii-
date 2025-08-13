#Step 1: Upload IRIS.csv (Only for Google Colab)
from google.colab import files
uploaded = files.upload()

#Step 2: Import Libraries
import pandas as pd
import numpy as np
import seaborn as sns
import matplotlib.pyplot as plt
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score, classification_report, confusion_matrix

#Step 3: Load Dataset
df = pd.read_csv("IRIS.csv")
print("First 5 Rows:")
print(df.head())

#Step 4: Dataset Info & Cleaning
print("\nDataset Info:")
print(df.info())
print("\n? Missing Values: \n", df.isnull().sum())
print("\n Class Distribution:\n", df['species'].value_counts())

#Step 5: Visualize Dataset
sns.pairplot(df, hue='species')
plt.title(" Pairplot of Iris Features")
plt.show()

#Step 6: Prepare Features & Labels
x = df.drop('species', axis=1)
y = df['species']
X_train, X_test, y_train, y_test = train_test_split(x, y, test_size=0.2, random_state=42)

#Step 7: Feature Scaling
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

# Step 8: Train Model
model = LogisticRegression()
model.fit(X_train_scaled, y_train)

#Step 9: Predict & Evaluate
y_pred = model.predict(X_test_scaled)
print("\nAccuracy:", accuracy_score(y_test, y_pred))
print("\nClassification Report:\n", classification_report(y_test, y_pred))

#Step 10: Confusion Matrix
cm = confusion_matrix(y_test, y_pred)
sns.heatmap(cm, annot=True, cmap='Blues', fmt='g', xticklabels=y.unique(), yticklabels=y.unique())
plt.title("Confusion Matrix")
plt.xlabel("Predicted")
plt.ylabel("Actual")
plt.show()