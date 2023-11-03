   const  issues = { 
   "software": {
        "slow computer": "Solution:\n1. Run a virus scan.\n2. Remove unnecessary startup programs.\n3. Upgrade your hardware if necessary.",
        "software crashes": "Solution:\n1. Update the software to the latest version.\n2. Check for conflicting programs.\n3. Reinstall the software.",
        "blue screen of death (bsod)": "Solutions:\n1. Restart your computer. This may fix the BSOD problem if it is caused by a temporary bug.\n2. Check for and remove malware. Malware can sometimes cause BSODs. Use a reputable antivirus program to scan your computer for malware and remove any infections that are found.\n3. Update your drivers. Outdated or corrupted drivers can sometimes cause BSODs. Check for and install updates for your device drivers.\n4. Run a memory test. A memory test can check for faulty memory modules, which can sometimes cause BSODs.\n5. Restore your system to a previous point in time. A system restore can undo changes that may have caused the BSOD problem.",
        "software not responding": "Solution:\n1. Close the unresponsive program through the Task Manager.\n2. Check for system updates and install them.\n3. Reinstall the program if the issue persists.\n4. Check for system resource utilization to identify any resource-hungry processes.\n5. Run a malware scan to ensure the system is not affected by malicious software.",
        "application crashes on startup": "Solution:\n1. Check for updates for the application and install them.\n2. Disable any conflicting or incompatible plugins or extensions.\n3. Try running the application with administrator privileges.\n4. Create a new user profile for the application.\n5. Reinstall the application if the problem persists.",
        "data loss or corruption": "Solution:\n1. Immediately stop using the affected storage device to prevent further data loss.\n2. Attempt data recovery using specialized software.\n3. Restore from backups if available.\n4. Consult data recovery professionals for more complex cases.\n5. Implement a regular backup strategy to prevent future data loss.",
        "internet connectivity issues": "Solution:\n1. Restart your modem and router.\n2. Check for physical cable or connection problems.\n3. Run a network troubleshooter on your computer.\n4. Reset network settings on your device.\n5. Contact your Internet Service Provider (ISP) if the issue persists.",
        "software update problems": "Solution:\n1. Check your internet connection to ensure it's stable.\n2. Clear your software update cache or restart the update process.\n3. Check for available storage space on your device.\n4. Disable any third-party antivirus software temporarily.\n5. Manually download and install updates from the software vendor's website.",
        "file not opening or loading slowly": "Solution:\n1. Check the file format for compatibility with your software.\n2. Repair or recover the file using built-in tools or third-party applications.\n3. Ensure you have enough system resources (RAM and CPU) to handle the file.\n4. Try opening the file on a different device or software.\n5. Restore the file from a backup if available.",
        "password or account access issues": "Solution:\n1. Reset your password through the account recovery process.\n2. Verify your email address and account credentials.\n3. Check for any account security notifications or restrictions.\n4. Contact the service provider's customer support for further assistance.\n5. Enable two-factor authentication for added security.",
        "software licensing or activation problems": "Solution:\n1. Ensure you have a valid license key or activation code.\n2. Deactivate and reactivate the software with your license information.\n3. Contact the software vendor's support for licensing issues.\n4. Check for any system clock or date/time discrepancies that might affect activation.\n5. Reinstall the software if necessary.",
        "printer not working": "Solution:\n1. Check the printer's connection to the computer or network.\n2. Verify that the printer is powered on and has paper and ink or toner.\n3. Update or reinstall the printer drivers.\n4. Clear any print queues or stuck print jobs.\n5. Restart the printer and the computer.",
        "audio not working": "Solution:\n1. Check the audio connections and ensure they are plugged in correctly.\n2. Adjust the volume settings and check for muted audio.\n3. Update or reinstall the audio drivers.\n4. Check the audio output device settings on the computer.\n5. Test the audio with different speakers or headphones.",
        "camera not working": "Solution:\n1. Check the camera connections and ensure they are properly plugged in.\n2. Verify that the camera is not being used by another application.\n3. Update or reinstall the camera drivers.\n4. Check the camera settings for any privacy restrictions.\n5. Restart the computer and the camera application.",
        "malware infection": "Solution:\n1. Run a full system scan with updated antivirus software.\n2. Disconnect from the internet to prevent further data loss or spread.\n3. Quarantine or delete any identified malware and infected files.\n4. Install security patches and updates for your operating system.\n5. Reset your passwords for all accounts after removing the malware.",
        "network configuration problems": "Solution:\n1. Verify the network settings and IP configurations on the devices.\n2. Reset the network devices, including the modem and router.\n3. Check for any firewall settings that may be blocking the network connection.\n4. Run a network diagnostic tool to identify any issues with the network.\n5. Contact your network administrator or Internet Service Provider (ISP) for further assistance.",
        "system performance degradation": "Solution:\n1. Check for background processes consuming system resources and terminate them.\n2. Upgrade the system's hardware components, such as RAM or storage.\n3. Perform a disk cleanup and remove temporary files and unnecessary data.\n4. Update device drivers and software applications to the latest versions.\n5. Adjust visual settings and animations to improve system performance.",
        "unwanted pop-ups or ads": "Solution:\n1. Run a full system scan with reputable antivirus and antimalware software.\n2. Check the browser settings and extensions for any suspicious or unwanted add-ons.\n3. Clear browser cache and cookies to remove any saved pop-up data.\n4. Install an ad-blocking extension or software to prevent further pop-ups.\n5. Avoid clicking on suspicious links or downloading files from untrusted sources.",
        "software installation failure": "Solution:\n1. Verify the system requirements and compatibility for the software.\n2. Temporarily disable any antivirus or security software during installation.\n3. Clean up temporary files and free up storage space on the system.\n4. Run the installation as an administrator to ensure necessary permissions.\n5. Download the software installation package from the official vendor's website.",
        // Add more software issues and solutions here
    },
    "hardware": {
        "no power": "Solution:\n1. Check the power source and connections.\n2. Test the power supply.\n3. Consult a technician if needed.",
        "overheating": "Solution:\n1. Clean the internal components and fans.\n2. Improve ventilation.\n3. Replace the cooling system if necessary.",
        "strange noises from hardware": "Solution:\n1. Identify the source of the noise by listening closely.\n2. Check for any loose components and tighten them if necessary.\n3. Clean the hardware to remove any dust or debris that might be causing the noise.\n4. Lubricate any moving parts if applicable.\n5. Consult a technician if the issue persists.",
        "hardware not recognized": "Solution:\n1. Check the connections and ensure the hardware is properly connected.\n2. Update the drivers for the hardware device.\n3. Try connecting the hardware to a different port or system to check if the issue is with the device or the system.\n4. Restart the system and check if the hardware is recognized upon reboot.\n5. If none of the above steps work, consult a technician for further diagnosis.",
        "frequent hardware crashes": "Solution:\n1. Check for any loose connections or faulty cables and replace them if necessary.\n2. Update the firmware of the hardware device to the latest version.\n3. Monitor the temperature of the hardware components to ensure they are not overheating.\n4. Perform a hardware diagnostic test to identify any failing components.\n5. Consult a technician for advanced troubleshooting and repairs.",
        "slow hard drive performance": "Solution:\n1. Check for available storage space on the hard drive.\n2. Defragment the hard drive to optimize data placement.\n3. Upgrade to a solid-state drive (SSD) for improved speed.\n4. Scan and repair any disk errors using built-in tools.\n5. Remove unnecessary files and programs to free up space.",
        "no display on monitor": "Solution:\n1. Check monitor connections and power source.\n2. Test the monitor on a different computer to verify if it's working.\n3. Inspect the graphics card and reseat it if necessary.\n4. Troubleshoot RAM and motherboard issues that might affect display.\n5. Replace the monitor or graphics card if the problem persists.",
        "hardware overheating": "Solution:\n1. Ensure proper airflow and ventilation in the computer case.\n2. Apply thermal paste to the CPU and GPU for better heat transfer.\n3. Check for dust buildup and clean the internal components.\n4. Install additional cooling fans or upgrade the cooling system.\n5. Monitor hardware temperatures using software and set up temperature alerts.",
        "unresponsive keyboard or mouse": "Solution:\n1. Check the connections and try different USB ports for the input devices.\n2. Replace the batteries in wireless keyboards or mice.\n3. Update or reinstall the drivers for the input devices.\n4. Test the keyboard or mouse on another computer to identify hardware issues.\n5. Consult a technician for repairs if the problem persists.",
        "system not booting up": "Solution:\n1. Check the power source and connections to ensure they are properly connected.\n2. Verify that the hardware components are seated correctly in their slots.\n3. Check the BIOS settings for any misconfigurations.\n4. Test the RAM modules individually to identify faulty modules.\n5. If the issue persists, consult a technician to diagnose hardware failures.",
        "hardware vibrations": "Solution:\n1. Secure any loose components or fasteners within the hardware.\n2. Place vibration-dampening materials under the hardware.\n3. Ensure the hardware is placed on a stable and level surface.\n4. Verify that the hardware is not in direct contact with other vibrating components.\n5. If the issue persists, consult a technician to investigate further.",
        "BIOS or firmware update failure": "Solution:\n1. Restart the system and attempt the update process again.\n2. Check for any interruptions in the power supply during the update.\n3. Use the manufacturer's recovery process or tools to restore the BIOS or firmware.\n4. If possible, use a backup BIOS or firmware chip to recover from the failed update.\n5. Consult the manufacturer's support or a technician for assistance if the issue persists.",
        "hardware component compatibility issues": "Solution:\n1. Check the hardware component specifications for compatibility with the system.\n2. Update the system's BIOS or firmware to the latest version.\n3. Install any necessary drivers or software for the hardware components.\n4. Verify that the power supply meets the requirements of all components.\n5. Consult the manufacturer's compatibility list or a technician for further guidance.",
        "motherboard failure": "Solution:\n1. Check for any visible signs of damage on the motherboard.\n2. Test the power supply to ensure it's delivering the correct voltage.\n3. Remove and reseat the RAM and other components connected to the motherboard.\n4. Clear the CMOS to reset the BIOS settings to default.\n5. If the motherboard is still not functioning, consult a technician for a replacement.",
        "graphics card not working": "Solution:\n1. Check the graphics card connections and ensure they are properly seated.\n2. Update the graphics card drivers to the latest version.\n3. Test the graphics card on another system to verify functionality.\n4. Check the system's power supply to ensure it can support the graphics card.\n5. If the issue persists, consult a technician for further diagnosis.",
        "RAM failure": "Solution:\n1. Reseat the RAM modules in their slots to ensure proper connections.\n2. Test the RAM modules individually in different slots to identify faulty modules.\n3. Check the system's BIOS for any settings related to memory configuration.\n4. If possible, test the RAM on another compatible system for comparison.\n5. Replace the faulty RAM modules with compatible replacements.",
        "hard drive failure": "Solution:\n1. Backup any important data from the failing hard drive immediately.\n2. Use disk repair or recovery tools to attempt to salvage data from the drive.\n3. Replace the SATA or power cables connected to the hard drive.\n4. Check for any unusual clicking or grinding noises from the hard drive.\n5. If the hard drive is still not functional, consult a data recovery specialist for further assistance.",
        "CPU overheating": "Solution:\n1. Check the CPU fan and heatsink for any obstructions or dust buildup.\n2. Apply high-quality thermal paste between the CPU and heatsink.\n3. Ensure proper airflow and ventilation within the computer case.\n4. Monitor CPU temperatures using software and adjust fan speeds if possible.\n5. If the CPU continues to overheat, consult a technician to inspect the cooling system.",
        // Add more hardware issues and solutions here
    },
};

let issueForm;

function selectIssue(choice) {
  removeSolution();
  issueForm = document.createElement("div");
  issueForm.classList.add("issue-form");

  var issueInput = document.createElement("input");
  issueInput.setAttribute("type", "text");
  issueInput.setAttribute("id", "issueInput");
  issueInput.setAttribute("placeholder", "Enter your issue");

  var submitButton = document.createElement("button");
  submitButton.innerHTML = "Submit";
  submitButton.onclick = function () {
    var issue = document.getElementById("issueInput").value;
    if (choice === 1) {
      var solution =
        issues.software[issue.toLowerCase()] ||
        "Sorry, we don't have a solution for this problem yet.";
      displaySolution(issue, solution);
    } else if (choice === 2) {
      var solution =
        issues.hardware[issue.toLowerCase()] ||
        "Sorry, we don't have a solution for this problem yet.";
      displaySolution(issue, solution);
    }
    issueForm.remove();
  };

  issueForm.appendChild(issueInput);
  issueForm.appendChild(submitButton);

  document
    .querySelector(".container")
    .insertBefore(issueForm, document.querySelector(".result"));
}

function removeSolution() {
  var existingSolution = document.querySelector(".popup");
  if (existingSolution) {
    existingSolution.remove();
  }
  if (issueForm) {
    issueForm.remove();
  }
}

function displaySolution(issue, solution) {
  var popup = document.createElement("div");
  popup.classList.add("popup");
  var content = document.createElement("div");
  content.classList.add("popup-content");
  var closeBtn = document.createElement("span");
  closeBtn.classList.add("close");
  closeBtn.innerHTML = "&times;";
  closeBtn.onclick = function () {
    popup.remove();
  };

  var issueDisplay = document.createElement("p");
  issueDisplay.innerHTML = "<strong>Issue:</strong> " + issue;
  var solutionTitle = document.createElement("p");
  solutionTitle.innerHTML = "<strong>Solution:</strong>";
  var solutionSteps = solution.split("\n");
  var solutionList = document.createElement("ul");
  solutionSteps.forEach(function (step) {
    var stepItem = document.createElement("li");
    stepItem.innerText = step;
    solutionList.appendChild(stepItem);
  });

  var copyButton = document.createElement("button");
  copyButton.innerHTML = "Copy";
  copyButton.onclick = function () {
    var tempTextarea = document.createElement("textarea");
    tempTextarea.value = solution;
    document.body.appendChild(tempTextarea);
    tempTextarea.select();
    document.execCommand("copy");
    document.body.removeChild(tempTextarea);
    alert("Copied the text: " + solution);
  };

  content.appendChild(closeBtn);
  content.appendChild(issueDisplay);
  content.appendChild(solutionTitle);
  content.appendChild(solutionList);
  content.appendChild(copyButton);
  popup.appendChild(content);

  document.body.appendChild(popup);
}
