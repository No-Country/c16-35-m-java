#
# Build stage
#
FROM maven:4.0.0-jdk-17 AS build
COPY . .
RUN mvn clean package -Pprod -DskipTests

#
# Package stage
#
FROM eclipse-temurin:17-jdk-alpine
COPY --from=build /target/Tuprofeenlinea-0.0.1-SNAPSHOT.jar app.jar
# ENV PORT=8080
EXPOSE 8080
ENTRYPOINT ["java","-jar","app.jar"]