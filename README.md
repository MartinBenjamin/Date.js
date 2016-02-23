# Date.js
## Synopsis
Localized parsing and formatting of dates using LDML compliant <a href="http://unicode.org/reports/tr35/tr35-dates.html" target="_blank">Date Format Patterns</a>.
<p>A full specification of Date.js is provided by the tests in DateSpec.js.  In brief, Date.js provides four functions:</p>

<ul>
<li>Date.prototype.formatDate(pattern)</li>
<li>parseDate(pattern, dateString)</li>
<li>Date.prototype.formatUTCDate(pattern)</li>
<li>parseUTCDate(pattern, dateString)</li>
</ul>
The pattern parameter is an LDML compliant Date Format Pattern string.  The parsing functions are built for partial application:

<pre><code>
var parse = parseDate('dd-MMM-yyyy');
var date = parse('01-Jan-2000');
</code></pre>
##cldr-json
Localization is achieved via <a href="https://github.com/unicode-cldr/cldr-json" target="_blank">cldr-json</a>.  The necessary cldr-json for the en-GB locale is embedded within a script tag within DateSpecRunner.html:

<pre><code>
&lt;script id="cldr" type="application/json">...&lt;/script>
&lt;script type="text/javascript">
  var cldr = JSON.parse(document.getElementById('cldr').innerHTML);
  Date.prototype.calendar = cldr.main['en-GB'].dates.calendars.gregorian;
&lt;/script>
</code></pre>
