🍳 AWS Lex Recipe Chatbot – DishDash

DishDash is an AI-powered recipe assistant built using AWS Lex V2.
It helps users find creative recipe ideas based on ingredients they already have — helping reduce food waste and make cooking more efficient.

------------------------------------------------------------
🚀 Overview
------------------------------------------------------------
DishDash lets users chat naturally to get recipe suggestions.
It uses Lex V2 for natural language understanding, Lambda for fulfillment, and S3 for hosting the frontend chat interface.
All communication happens through AWS serverless components, making it scalable and cost-effective.

------------------------------------------------------------
🧠 Features
------------------------------------------------------------
- Conversational Interface using AWS Lex V2
- Ingredient-based recipe suggestions
- Fully Serverless: AWS Lambda, S3, SQS, and DynamoDB
- Fallback Support for unrecognized inputs
- Notifications using SNS
- Data storage with DynamoDB

------------------------------------------------------------
🧩 Architecture
------------------------------------------------------------
Frontend (S3) → API Gateway (LF0) → Lex Bot + LF1 (Fulfillment) → SQS + DynamoDB + SNS (LF2)

Flow:
User (Web Chat)
   ↓
Amazon Lex V2 (Intent Recognition)
   ↓
Lambda (Fulfillment Logic)
   ↓
SQS + DynamoDB (Queue + Storage)
   ↓
SNS (Notifications)

------------------------------------------------------------
⚙️ Tech Stack
------------------------------------------------------------
- AWS Lex V2 – Chatbot engine
- AWS Lambda – Backend logic (LF0, LF1, LF2)
- Amazon S3 – Static frontend hosting
- Amazon DynamoDB – Data storage
- Amazon SQS & SNS – Message handling and notifications
- JavaScript, HTML, CSS – Frontend chat UI

------------------------------------------------------------
🧑‍💻 How It Works
------------------------------------------------------------
1. User types an ingredient in the web chat.
2. Lex processes the input and triggers the corresponding intent.
3. Lambda (LF1) fetches recipes from DynamoDB and replies.
4. If no match is found, the bot uses a fallback response.
5. All user queries and recipes can be logged for analytics or future personalization.

------------------------------------------------------------
🔮 Future Improvements
------------------------------------------------------------
- Add real-time recipe APIs instead of dummy data
- Include dietary filters (e.g., vegan, gluten-free)
- Enable multi-language and voice interaction
- Improve personalization using user history

------------------------------------------------------------
💡 Inspiration
------------------------------------------------------------
This project was built as part of an AWS-based chatbot assignment, demonstrating how serverless architecture can power a useful, real-world AI assistant.

------------------------------------------------------------

