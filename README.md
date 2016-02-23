<h1>Date.js</h1>
<h2>Synopsis</h1>
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

<h2>cldr-json</h2>
Localization is achieved via <a href="https://github.com/unicode-cldr/cldr-json" target="_blank">cldr-json</a>.  The necessary cldr-json for the en-GB locale is embedded within a script tag within DateSpecRunner.html:

<pre><code>
&lt;script id="cldr" type="application/json">...&lt;/script>
&lt;script type="text/javascript">
  var cldr = JSON.parse(document.getElementById('cldr').innerHTML);
  Date.prototype.calendar = cldr.main['en-GB'].dates.calendars.gregorian;
&lt;/script>
</code></pre>

Date.js locates the necessary cldr-json via the property <code>Date.prototype.calendar</code>.  cldr-json for dates for all locales is available within GitHub <a href="https://github.com/unicode-cldr/cldr-dates-full/tree/master/main" target="_blank">here</a>
