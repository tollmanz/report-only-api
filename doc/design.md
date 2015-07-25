*Validate*

When the input is received, it will be validated. This decision is made as early
as possible in order to stop processing if the decision has been made that the
data does not fit the expected format.

*Process*

Data is processed into its final format in this step. The raw data sent by a CSP
reporter is not the same format that will be stored. This format is determined
in this step.

*Store*

Once data is formatted, it is stored. In this step, the routines for storing the
data is defined. This storage step allows for defining alternative storage
backends for the data.

*Data Handling*

