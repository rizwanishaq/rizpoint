import React, { useEffect, useState } from "react";
import { storage } from "../firebase-config";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import { toast } from "react-toastify";
import { Container, Row, Col, Button, Form, InputGroup } from "react-bootstrap";

const UploadImage = () => {
  const [imageUpload, setImageUpload] = useState(null);
  const [imageList, setImageList] = useState([]);
  const [update, setUpdate] = useState(false);

  const imageListRef = ref(storage, "image/");

  useEffect(() => {
    listAll(imageListRef).then((response) => {
      setImageList([]);
      response.items.map((item) => {
        getDownloadURL(item).then((url) => {
          setImageList((prev) => [...prev, url]);
        });
      });
    });
  }, [update]);

  const uploadImage = async () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `image/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload)
      .then(() => {
        toast.success("image uploaded");
        setUpdate(!update);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <Container className="mt-2 text-center">
      <Row className="mt-2 mb-2">
        <Col>
          {imageList.map((url) => {
            return <img src={url} key={url} />;
          })}
        </Col>
      </Row>

      <InputGroup className="mb-3">
        <Form.Control
          type="file"
          onChange={(e) => setImageUpload(e.target.files[0])}
        />
        <Button onClick={uploadImage}>Upload</Button>
      </InputGroup>
    </Container>
  );
};

export default UploadImage;
