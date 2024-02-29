//package com.c1635mjava.Tuprofeenlinea.service.impl;
//import com.c1635mjava.Tuprofeenlinea.service.IUploadFileService;
//import org.springframework.stereotype.Service;
//import org.springframework.core.io.Resource;
//import org.springframework.core.io.UrlResource;
//import org.springframework.web.multipart.MultipartFile;
//import java.io.IOException;
//import java.net.MalformedURLException;
//import java.nio.file.Files;
//import java.nio.file.Path;
//import java.nio.file.Paths;
//import java.util.UUID;
//
//@Service
//class UploadFileServiceImpl implements IUploadFileService {
//
//    private final static String UPLOADS_FOLDER = "uploads";
//
//    @Override
//    public Resource load(String filename) throws MalformedURLException {
//        Path path = Paths.get(UPLOADS_FOLDER).resolve(filename);
//        Resource resource = new UrlResource(path.toUri());
//
//        if (!resource.exists() || !resource.isReadable()) {
//            throw new RuntimeException("Error in path: " + path.toString());
//        }
//        return resource;
//    }
//
//    @Override
//    public String copy(MultipartFile file) throws IOException {
//        String uniqueFilename = UUID.randomUUID().toString() + "_" + file.getOriginalFilename();
//        Path rootPath = Paths.get(UPLOADS_FOLDER).resolve(uniqueFilename);
//        Files.copy(file.getInputStream(), rootPath);
//        return uniqueFilename;
//    }
//
//    @Override
//    public boolean delete(String filename) {
//        Path rootPath = Paths.get(UPLOADS_FOLDER).resolve(filename);
//        try {
//            Files.delete(rootPath);
//            return true;
//        } catch (IOException e) {
//            e.printStackTrace();
//            return false;
//        }
//    }
//}
