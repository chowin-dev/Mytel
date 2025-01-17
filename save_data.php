<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['data'])) {
    $data = rtrim($_POST['data'], '}') . '}'; // Ensure the data ends with '}'
    $filePath = 'datas.txt'; // Path to your data file

    // Check if the file exists and is not empty
    if (file_exists($filePath) && filesize($filePath) > 0) {
        // Read the existing content
        $fileContent = file_get_contents($filePath);

        // Append the new data with a comma if the file is not empty
        if (substr(trim($fileContent), -1) === '}') {
            $updatedContent = $fileContent . ',' . $data;
        } else {
            $updatedContent = $fileContent . $data;
        }

        // Save back to the file
        file_put_contents($filePath, $updatedContent);
    } else {
        // If the file is empty or does not exist, add data without brackets
        file_put_contents($filePath, $data);
    }

    echo "Data saved successfully!";
} else {
    echo "Invalid request!";
}
?>
