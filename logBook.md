# 📝 LOG BOOK

**Freelancing Platform-Fiver**  
**Semester Project - III (Sem-V, 2024-25)**

---

## 📅 Weekly Progress

## Weekly Progress

| Week | Date Range       | Tasks Completed                                                       | Next Steps                        |
|------|------------------|----------------------------------------------------------------------|-----------------------------------|
| 1    | 19/8/24 - 24/8/24 | Introduction: Project Background, Motivation                         | Finalize problem statement       |
| 2    | 26/8/24 - 31/8/24 | Introduction: Problem Statement, Objectives                          | Plan literature survey           |
| 3    | 2/9/24 - 7/9/24  | Literature Survey: Reviewed existing freelancing platforms, identified limitations | Tabulate findings                 |
| 4    | 9/9/24 - 21/9/24 | Proposed System: Overall Architecture, Module Division               | Finalize technology stack         |
| 5    | 23/9/24 - 28/9/24 | Requirements: Frontend (React), Backend API (Nodejs express mongodb), Database (MySQL) | Start frontend and backend setup  |
| 6    | 30/9/24 - 5/10/24 | Methodology: Created workflow diagrams and ER diagrams               | Start Module 1: Freelancer & Employer Management |
| 7    | 7/10/24 - 12/10/24 | Module 1: Freelancer Profile Creation, Employer Registration, Job Posting (completed basic version) | Backend API integration          |
| 8    | 14/10/24 - 19/10/24 | Module 2: Built-in real-time messaging (WebSocket), Milestone tracking, File sharing system completed | Testing collaboration tools      |
| 9    | 21/10/24 - 26/10/24 | Outcome: Integrated Modules 1, 2, and 3; Report writing, deployment preparation | Start Module 3: Secure Payment System |


---

## 📖 Detailed Chapters

### Chapter 1: Introduction

#### 1.1 Background & Motivation

- Freelancers and employers face difficulties in efficiently finding suitable projects or talent.
- Most current platforms have high commission charges, limited matching intelligence, or security concerns regarding payment systems.

#### 1.2 Problem Statement

- Lack of an intelligent, low-commission freelancing platform with integrated real-time communication, smart job matching, and escrow-based secure payments.

#### 1.3 Objectives

- Freelancers can create detailed profiles and find best-suited jobs automatically.
- Employers can easily post jobs and hire skilled freelancers.

---

# Chapter 2: Literature Survey

## 2.1 Existing Systems

### 2.1.1 Comparative Analysis of Sign Language Translation Methods

#### Detailed Comparison Table

## Freelancing Platform Comparison

| Platform        | Pros                          | Cons                          | Fees             | AI Features              |
|-----------------|-------------------------------|-------------------------------|------------------|--------------------------|
| **Upwork**      | Large user base, secure       | High service fees, complex bidding | 5-20% commission | Basic recommendations     |
| **Freelancer.com** | Variety of jobs              | Fake job postings, quality issues | 10% commission   | Basic matching            |
| **Fiverr**      | Quick gig posting             | Limited for large projects    | 20% commission   | No smart matching         |

---

## 2.2 Research Gaps

### 2.2.1 Identified Limitations in Current Technologies

- Lack of skill-based intelligent job matching.
- No escrow-based automatic payment release upon project completion.
- Poor built-in real-time communication and project tracking tools.


## 2.2 Summary of Findings

- Intelligent job recommendations based on machine learning are rarely implemented.

- Few platforms ensure milestone tracking with messaging integrated.

- Freelancers lack access to market demand analytics to plan skills growth.

---

### Chapter 3: Proposed System

#### 3.1 Architecture

1. **Frontend**: ReactJS for responsive UI/UX.
2. **Backend**: Nodejs , Express, SQL
3. **Database**: SQL
4. **AI Model**:Python (Scikit-learn,Tenserflow)
5. **Real-Time Communication**: WebSocket
6. **Payment gateway**: Escorw,Stripe

#### 3.2 Technology Stack

## Module and Technologies Used

| Module                        | Technologies Used                    |
|-------------------------------|--------------------------------------|
| Freelancer & Employer Management | React, Node, Express, MySQL          |
| AI Job Matching               | Python (scikit-learn, TensorFlow)    |
| Secure Payment & Escrow       | Payment Gateway API, SQL            |
| Communication Tools           | WebSocket, Cloud Storage            |
| Analytics & Insights          | MySQL Queries, Data Visualization   |

---

# Chapter 4: Implementation

## 4.1 Phase 1 (Completed)

### Module 1: Freelancer & Employer Management

The first development phase focused on setting up the core functionalities for both freelancers and employers within the platform. This included user registration, profile management, and job-related activities to enable seamless interactions between both parties.

#### Freelancer Profile Creation

- Freelancers can create and manage detailed profiles.
- Users can upload resumes, portfolios, certificates, and professional details.
- Profiles are visible to employers when they search for potential candidates.

#### Employer Registration and Job Posting

- Employers can create business profiles and post job opportunities.
- Each job posting allows employers to specify project details, milestones, budgets, and required skills.
- Employers can manage and update their posted jobs through their dashboards.

#### Job Application and Bidding System

- Freelancers can view posted jobs and submit applications or project bids.
- Employers can review applications and hire freelancers based on profiles, bids, and past ratings.
- The bidding system is designed to make project allocation transparent and competitive.

✅ Frontend and backend integration for Module 1 completed successfully.

## 4.2 Phase 2 (Completed)

### Module 2: Communication & Collaboration Tools

This phase focused on developing effective communication and project management tools within the platform, enabling seamless collaboration between freelancers and employers.

#### Real-Time Messaging

- Implemented private chats between freelancers and employers using WebSocket technology.
- Enables instant messaging to discuss project details, updates, and clarifications.

#### Milestone Tracking

- Milestones are created during the job posting process by employers.
- Freelancers and employers can track progress against predefined milestones throughout the project lifecycle.
- Milestone status updates help ensure project transparency and timely delivery.

#### File Sharing and Cloud Storage

- Developed a secure system for uploading, downloading, and managing project-related documents.
- Supports sharing of code files, design files, reports, and other deliverables.
- Data is stored safely using cloud storage solutions ensuring confidentiality and integrity.

✅ Messaging and collaboration features are fully functional and integrated.

---

## 4.3 Upcoming Phases

### Module 3: AI Job Matching Algorithm

**Goal**: Suggest jobs based on freelancer skills, experience, and behavior.

- **Features**: 
  - Skill, experience, and behavior-based recommendations.
  - Continuous learning from freelancer activities.
  
- **Technology**: Python, scikit-learn, TensorFlow.

---

### Module 4: Secure Payment & Escrow System

**Goal**: Ensure secure financial transactions between freelancers and employers.

- **Features**:
  - Escrow system for holding funds.
  - Automatic payment release upon project completion.
  
- **Technology**: Payment Gateway API (Razorpay, Stripe, PayPal), SQL.

---

### Module 5: Analytics & Insights Module

**Goal**: Provide analytics to help freelancers and employers make informed decisions.

- **Features**:
  - Job trends, freelancer ratings, project completion metrics.
  - Dashboards for both freelancers and employers.

- **Technology**: Java APIs (backend), React (frontend), SQL.

---

Each module will undergo thorough testing to ensure reliability across devices.


## 5. Software & Hardware Requirements

- **Software:** ReactJS, Node.js, Express, MySQL, Python (scikit-learn, TensorFlow), WebSocket Server, Payment Gateway API
- **Hardware:** Laptop/PC (minimum 8 GB RAM), Reliable Internet, Optional Cloud Hosting (AWS/Azure)

---

## Outcomes & Deliverables

- Functional modules: Freelancer-Employer Management, AI Job Matching, Communication Tools
- Secure login and registration system
- Live chat feature for collaboration
- Intelligent job recommendations
- Admin panel for user management (upcoming)

---

## References

1. Upwork Developer Documentation
2. Freelancer.com API Guide
3. Scikit-Learn Documentation for ML Algorithms
4. TensorFlow Model Deployment for Recommendation Systems
5. WebSocket API Documentation
6. Express Documentation
7. REST API Documentation
