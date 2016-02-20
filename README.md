# Date.js
Parse and format dates using LDML compliant Date Format Patterns.
<p>A full specification of Date.js is provided by the tests in DateSpec.js.  In brief, Date.js provides four global functions:</p>

<ul style="font-family: Courier">
<li>formatDate(pattern, date)</li>
<li>parseDate(pattern, dateString)</li>
<li>formatUtcDate(pattern, date)</li>
<li>parseUtcDate(pattern, dateString)</li>
</ul>
The pattern argument is an LDML compliant Date Format Pattern string.  These functions are built for partial application:

var dateParser = parseDate('dd-MMM-yyyy');<br>
var date = dateParser('01-Jan-2000');


