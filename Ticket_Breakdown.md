# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here
1. We can add a column to the Agents table to store the new ID's that the facilities would like to add
  here we can later add ID's given by facilities in a function
2. create a new function 'addFacitlityAgentID' that adds those ID's given by the facility to the Agents table
3. create a new function 'getShiftsByFacilityAgentID' which will generate all of the shifts worked by a specific facilities agent at the specific facility requested
  example query: SELECT * FROM Agents WHERE (FacilityId = x AND FacilityAgentId = y);
4. create a new function 'generateReportByFacilityAgentId' which will generate a report specific to the agent they are looking for
  example query: 'SELECT * FROM Agents WHERE (FacilityId = x AND FacilityAgentId = y) LEFT INNER JOIN Shifts ON Agents.id = Shifts.AgentID';
  this would allow you to query on the left table for the agent you are looking for and join it with all of their shifts, only getting overlapping values