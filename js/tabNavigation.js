/* Tab Navigation Section Start */
/* Tab Navigation Implementation Subsection Start */
/* openTab Subsection Start */
function openTab(evt, tabName) {
    try {
        document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
        document.querySelectorAll('.tab-link').forEach(link => link.classList.remove('active'));
        const tabElement = document.getElementById(tabName);
        if (tabElement) {
            tabElement.classList.add('active');
            evt.currentTarget.classList.add('active');
        } else {
            console.error(`Tab Navigation: Tab "${tabName}" not found.`);
        }
    } catch (e) {
        console.error('Tab Navigation: Error opening tab:', e);
    }
}
/* openTab Subsection End */
/* Tab Navigation Implementation Subsection End */
/* Tab Navigation Section End */

export { openTab };
