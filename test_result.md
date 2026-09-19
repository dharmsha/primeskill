#====================================================================================================
# START - Testing Protocol - DO NOT EDIT OR REMOVE THIS SECTION
#====================================================================================================

# THIS SECTION CONTAINS CRITICAL TESTING INSTRUCTIONS FOR BOTH AGENTS
# BOTH MAIN_AGENT AND TESTING_AGENT MUST PRESERVE THIS ENTIRE BLOCK

# Communication Protocol:
# If the `testing_agent` is available, main agent should delegate all testing tasks to it.
#
# You have access to a file called `test_result.md`. This file contains the complete testing state
# and history, and is the primary means of communication between main and the testing agent.
#
# Main and testing agents must follow this exact format to maintain testing data. 
# The testing data must be entered in yaml format Below is the data structure:
# 
## user_problem_statement: {problem_statement}
## backend:
##   - task: "Task name"
##     implemented: true
##     working: true  # or false or "NA"
##     file: "file_path.py"
##     stuck_count: 0
##     priority: "high"  # or "medium" or "low"
##     needs_retesting: false
##     status_history:
##         -working: true  # or false or "NA"
##         -agent: "main"  # or "testing" or "user"
##         -comment: "Detailed comment about status"
##
## frontend:
##   - task: "Task name"
##     implemented: true
##     working: true  # or false or "NA"
##     file: "file_path.js"
##     stuck_count: 0
##     priority: "high"  # or "medium" or "low"
##     needs_retesting: false
##     status_history:
##         -working: true  # or false or "NA"
##         -agent: "main"  # or "testing" or "user"
##         -comment: "Detailed comment about status"
##
## metadata:
##   created_by: "main_agent"
##   version: "1.0"
##   test_sequence: 0
##   run_ui: false
##
## test_plan:
##   current_focus:
##     - "Task name 1"
##     - "Task name 2"
##   stuck_tasks:
##     - "Task name with persistent issues"
##   test_all: false
##   test_priority: "high_first"  # or "sequential" or "stuck_first"
##
## agent_communication:
##     -agent: "main"  # or "testing" or "user"
##     -message: "Communication message between agents"

# Protocol Guidelines for Main agent
#
# 1. Update Test Result File Before Testing:
#    - Main agent must always update the `test_result.md` file before calling the testing agent
#    - Add implementation details to the status_history
#    - Set `needs_retesting` to true for tasks that need testing
#    - Update the `test_plan` section to guide testing priorities
#    - Add a message to `agent_communication` explaining what you've done
#
# 2. Incorporate User Feedback:
#    - When a user provides feedback that something is or isn't working, add this information to the relevant task's status_history
#    - Update the working status based on user feedback
#    - If a user reports an issue with a task that was marked as working, increment the stuck_count
#    - Whenever user reports issue in the app, if we have testing agent and task_result.md file so find the appropriate task for that and append in status_history of that task to contain the user concern and problem as well 
#
# 3. Track Stuck Tasks:
#    - Monitor which tasks have high stuck_count values or where you are fixing same issue again and again, analyze that when you read task_result.md
#    - For persistent issues, use websearch tool to find solutions
#    - Pay special attention to tasks in the stuck_tasks list
#    - When you fix an issue with a stuck task, don't reset the stuck_count until the testing agent confirms it's working
#
# 4. Provide Context to Testing Agent:
#    - When calling the testing agent, provide clear instructions about:
#      - Which tasks need testing (reference the test_plan)
#      - Any authentication details or configuration needed
#      - Specific test scenarios to focus on
#      - Any known issues or edge cases to verify
#
# 5. Call the testing agent with specific instructions referring to test_result.md
#
# IMPORTANT: Main agent must ALWAYS update test_result.md BEFORE calling the testing agent, as it relies on this file to understand what to test next.

#====================================================================================================
# END - Testing Protocol - DO NOT EDIT OR REMOVE THIS SECTION
#====================================================================================================



#====================================================================================================
# Testing Data - Main Agent and testing sub agent both should log testing data below this section
#====================================================================================================

## user_problem_statement: Hindi-first Prime Skill Technical Institute responsive Next.js/Tailwind website with course cards, WhatsApp enquiry, provided logo/poster/training assets, and downloadable project
## backend:
##   - task: "Simple course enquiry API"
##     implemented: true
##     working: "NA"
##     file: "/app/app/api/[[...path]]/route.js"
##     stuck_count: 0
##     priority: "high"
##     needs_retesting: true
##     status_history:
##         -working: "NA"
##         -agent: "user"
##         -comment: "User requested a simple ZIP without MongoDB; replaced persistence with a lightweight API response."
##         -working: "NA"
##         -agent: "main"
##         -comment: "Added GET /api/enquiries and POST /api/enquiries with UUID response, validation, and error handling; no database dependency."
## frontend:
##   - task: "Hindi Prime Skill marketing site and WhatsApp conversion flow"
##     implemented: true
##     working: "NA"
##     file: "/app/app/page.js"
##     stuck_count: 0
##     priority: "high"
##     needs_retesting: false
##     status_history:
##         -working: "NA"
##         -agent: "main"
##         -comment: "Built Hindi-first responsive landing page with supplied assets, 10 course cards, responsive navigation, contact form, and WhatsApp CTAs for 8527378513."
## metadata:
##   created_by: "main_agent"
##   version: "1.0"
##   test_sequence: 1
##   run_ui: false
## test_plan:
##   current_focus:
##     - "POST /api/enquiries validation and simple success response"
##     - "GET /api/enquiries response shape"
##     - "No MongoDB dependency in simple ZIP"
##   stuck_tasks: []
##   test_all: false
##   test_priority: "high_first"
## agent_communication:
##     -agent: "main"
##     -message: "Core Hindi website and enquiry backend are implemented. Test backend first per protocol; do not run frontend UI testing without explicit user permission."

## Backend testing update (testing agent, sequence 2)
## backend:
##   - task: "Course enquiry API and MongoDB persistence"
##     implemented: true
##     working: true
##     file: "/app/app/api/[[...path]]/route.js"
##     stuck_count: 0
##     priority: "high"
##     needs_retesting: false
##     status_history:
##         -working: true
##         -agent: "testing"
##         -comment: "Independent curl-backed backend_test.py passed all requested checks against NEXT_PUBLIC_BASE_URL: GET /api health JSON, GET /api/enquiries JSON with no _id fields, missing name/phone/course returns HTTP 400 with Hindi message, valid Hindi-looking enquiry returns HTTP 201 with UUID id and createdAt, and the created record is returned by a subsequent GET (Mongo persistence). Source uses process.env.MONGO_URL and has no hardcoded app URL/port. Test file created at /app/backend_test.py."
## agent_communication:
##     -agent: "testing"
##     -message: "Backend API fully passed independent public-URL testing. No critical backend issues found; do not retest this task unless implementation changes. Frontend was not tested per protocol."

## Backend testing update (testing agent, sequence 3)
## backend:
##   - task: "Simple course enquiry API (MongoDB-free retest)"
##     implemented: true
##     working: true
##     file: "/app/app/api/[[...path]]/route.js"
##     stuck_count: 0
##     priority: "high"
##     needs_retesting: false
##     status_history:
##         -working: true
##         -agent: "testing"
##         -comment: "Retested against NEXT_PUBLIC_BASE_URL using /app/backend_test.py: GET /api returned ok health JSON; GET /api/enquiries returned exactly {ok:true,enquiries:[]}; each missing name, phone, or course POST returned HTTP 400 with the required Hindi message; valid Hindi-looking payload returned HTTP 201 with submitted fields, UUID id, and ISO-8601 createdAt. Static route inspection confirms no mongodb import, MONGO_URL/process.env dependency, or hardcoded URL/port. No critical backend issues found."
## agent_communication:
##     -agent: "testing"
##     -message: "MongoDB-free enquiry API retest passed all requested backend checks. /app/backend_test.py was updated to remove the obsolete persistence assertion and cover each missing required field plus static dependency checks. Frontend was not tested per protocol."
