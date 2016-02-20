# Date.js
## Synopsis
Parse and format dates using LDML compliant <a href="http://unicode.org/reports/tr35/tr35-dates.html" target="_blank">Date Format Patterns</a>.
<p>A full specification of Date.js is provided by the tests in DateSpec.js.  In brief, Date.js provides four global functions:</p>

<ul>
<li>formatDate(pattern, date)</li>
<li>parseDate(pattern, dateString)</li>
<li>formatUtcDate(pattern, date)</li>
<li>parseUtcDate(pattern, dateString)</li>
</ul>
The pattern parameter is an LDML compliant Date Format Pattern string.  These functions are built for partial application:

<pre><code>
var dateParser = parseDate('dd-MMM-yyyy');
var date = dateParser('01-Jan-2000');
</code></pre>

