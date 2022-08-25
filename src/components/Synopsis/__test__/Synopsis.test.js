import React from "react";
import { render } from "@testing-library/react-native";
import Synopsis from "..";

describe("Synopsis", () => {
    describe("Sinopses está sendo renderizada na tela", () => {
        it("Deve retornar a tagline", () => {
            const {getByText} = render(
                <Synopsis overview={"descrição"} tagline={"tagline"} />
            )
            expect(getByText("tagline")).toBeTruthy();
        })
        it("Deve retornar a overview", () => {
            const {getByText} = render(
                <Synopsis overview={"descrição"} tagline={"tagline"} />
            )
            expect(getByText("descrição")).toBeTruthy();
        })
    })
    describe("Sinopses não está sendo renderizada", () => {
        it("Deve retorna um erro caso não ache a tagline", () => {
            const {getByText} = render(
                <Synopsis />
            )
            expect(() => getByText("tagline")).toThrow();
        })
        it("Deve retornar um erro caso não ache a descrição", () => {
            const {getByText} = render(
                <Synopsis />
            )
            expect(() => getByText("descrição")).toThrow();
        })
    })
})