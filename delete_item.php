<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = json_decode(file_get_contents('php://input'), true);

    if (isset($input['index'])) {
        $index = $input['index'];
        $filePath = 'datas.txt';

        if (file_exists($filePath) && filesize($filePath) > 0) {
            $fileContent = file_get_contents($filePath);
            $data = explode('},{', trim($fileContent, '{}')); // Split items

            if (isset($data[$index])) {
                unset($data[$index]); // Remove the item
                $newContent = implode('},{', $data);

                if (!empty($newContent)) {
                    file_put_contents($filePath, '{' . $newContent . '}');
                } else {
                    file_put_contents($filePath, ''); // Empty the file
                }
                echo "Item deleted successfully!";
            } else {
                echo "Item not found!";
            }
        } else {
            echo "File is empty!";
        }
    } else {
        echo "Invalid index!";
    }
} else {
    echo "Invalid request method!";
}
?>
