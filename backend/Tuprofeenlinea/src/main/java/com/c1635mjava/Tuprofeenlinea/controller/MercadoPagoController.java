//package com.c1635mjava.Tuprofeenlinea.controller;
//
//import com.c1635mjava.Tuprofeenlinea.service.impl.MercadoPagoService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//@RestController
//@RequestMapping("/api/mercadoPago")
//public class MercadoPagoController {
//
//    @Autowired
//    private MercadoPagoService mercadoPagoService;
//
//    @PostMapping("/createPreference")
//    public ResponseEntity<?> createPreference(@RequestBody PaymentPreferenceRequest request) {
//        try {
//            PaymentPreferenceResponse response = mercadoPagoService.createPreference(request);
//            return ResponseEntity.ok(response);
//        } catch (Exception e) {
//            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
//        }
//    }
//}
